import { Request, Response } from 'express';
import connection from '../db/connection';


export const getStats = (req: Request, res: Response) => {

   const query = `SELECT sum(mutation=1) AS count_mutation,
                         sum(mutation=0) AS count_no_mutation, 
                         sum(mutation=1)/sum(mutation=0) AS ratio  
                  FROM dna;`

   connection.query(query, (err, data) => {
      if (err) throw err;
      res.status(200).send(data)
   })
}

export const postMutation = (req: Request, res: Response) => {

   const { dna } = req.body
   const mutation = hasMutation(dna)
   const logDna = JSON.stringify(dna)

   const post = {
      dna: logDna,
      mutation: mutation ? 1 : 0
   }

   connection.query('INSERT INTO dna SET ? ', [post], (err, data) => {
      if (err) throw err;

      if (mutation) {
         res.status(200).send(mutation)
      } else {
         res.status(400).send(mutation)
      }

   })

}

function hasMutation(dna: []): boolean {

   if (dna == null || dna.length == 0 || !validDimension(dna)) {
      return false
   }

   if (searchHorizontal(dna) || searchVertical(dna) || searchOblic(dna)) {
      return true
   } else {
      return false
   }

}

function validDimension(dna: []): boolean {
   return dna.length == String(dna[dna.length - 1]).split('').length
}

function searchRepeated(word: string): boolean {
   return word.match(/^(.)\1{3}/) ? true : false
}

function searchHorizontal(array: []): boolean {
   let bandera = false
   for (const cadena in array) {
      if (!bandera) {
         bandera = searchRepeated(array[cadena])
      }
   }
   return bandera
}

function searchVertical(array: []): boolean {
   const wordBase = array[array.length - 1]
   const repets = String(wordBase).length

   let resultDna = false

   for (let posicion = 0; posicion < repets; posicion++) {
      var wordVertical = ''
      for (const element in array) {
         wordVertical += array[element][posicion]
      }

      if (!resultDna) {
         resultDna = searchRepeated(wordVertical)
      }
      console.log(wordVertical)
   }

   return resultDna
}

function searchOblic(secuenciaDna: []): boolean {

   const newArray = []

   let resultDna = false

   for (const key in secuenciaDna) {
      newArray.push(String(secuenciaDna[key]).split(''))
   }

   const M = newArray.length;
   const N = newArray[0].length;
   let cadenaOblicua = ''

   for (let r = 0; r < M; r++) {

      for (let i = r, j = 0; j < N && i >= 0; i--, j++) {
         cadenaOblicua += newArray[i][j] + ""
      }

      if (!resultDna) {
         resultDna = searchRepeated(cadenaOblicua)
      }
      cadenaOblicua = ''
   }

   for (let c = 1; c < N; c++) {

      for (let i = M - 1, j = c; j < N && i >= 0; i--, j++) {
         cadenaOblicua += newArray[i][j] + ""
      }

      if (!resultDna) {
         resultDna = searchRepeated(cadenaOblicua)
      }

      cadenaOblicua = ''
   }

   // diagonalDerechaIzq

   const newSecuenceDna = []

   var columnas = String(secuenciaDna[secuenciaDna.length - 1]).length
   var bandera = false

   for (const itemSecuence in secuenciaDna) {
      newSecuenceDna.push(String(secuenciaDna[itemSecuence]).split(''))
   }

   for (let colum = columnas - 1; colum >= 0; colum--) {
      var nVueltas = columnas - colum
      var avanzar = columnas - nVueltas
      var word = ''

      for (let vuelta = 1; vuelta <= nVueltas; vuelta++, avanzar++) {
         word += obtenerCaracter(newSecuenceDna, vuelta, avanzar)
      }

      if (!bandera) {
         bandera = searchRepeated(word)
      }

      word = ''

   }

   // Oblicuo desde la diagonal hacia abajo    

   var word = ''
   for (let index = 1; index <= columnas; index++) {

      for (let i = 0, aux = 0; i < newSecuenceDna.length; i++) {
         word += newSecuenceDna[i][i]
      }

      if (!bandera) {
         bandera = searchRepeated(word)
      }

      word = ''

      newSecuenceDna.shift()
   }

   return resultDna
}


function obtenerCaracter(array: any, vuelta: number, avanzar: number): string {
   return array[vuelta - 1][avanzar]
}