# Evolve-adn

El sistema evolve-adn tiene como proposito detectar si una persona tiene diferencias geneticas basandose en su secuencia de ADN.

1.- Lo primero que tenemos que hacer es clonar el proyecto, la liga es 
```bash 
   git clone https://github.com/GelaLez/typescript-adn.git 
```

2.- Instala las dependencias con el manejador de paquetes npm
```bash
   npm install
```

3.- dirigete a la carpeta typescript-adn y dentro de la carpeta ingresa lo siguiente
```bash
   npm install
```


4.- Abre una terminal e ingresa el siguiente comando
```bash
   npm run dev
 ```
 
5.- Abre otra terminal e ingresa el siguiente comando
 ```bash
    npm run start
 ```
 
6.- Enviar una secuenta de ADN 
```bash
   method:Post
   url : http://localhost:3000/api/adn/mutation 
   body:  {
            "dna": ["ATGAAAGTAC","TACTGTTGTT","GGACACCCGA","CCTGTAAACG","AAGTGGCCAA","TACAACCGGT","GTTGAAACAC","CCACTGATCG","AGTAGTGAGC","AACTCAAGCA"]
         }
 ```

7.- Obtener informacion de las estadisticas
```bash
   method:Get
   url: http://localhost:3000/api/adn/stats 
```

Las siguientes secuencias se probaron:
```bash

["ATGCGH", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
["ATGCGHD", "CAGTGCD", "TTATGTD", "AGAAGGD", "CCCCTAD", "TCACTGD", "TCACTGD"]

```

![imagen](https://user-images.githubusercontent.com/16170395/236930494-30973e53-6810-4aa6-8f70-7d09c6881e17.png)

