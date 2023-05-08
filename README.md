# evolve-adn

El sistema evolve-adn tiene como proposito detectar si una persona tiene diferencias geneticas basandose en su secuencia de ADN.

1.- Lo primero que tenemos que hacer es clonar el proyecto, la liga es 
** https://github.com/GelaLez/typescript-adn.git **

2.- Instala las dependencias con el manejador de paquetes npm
```bash
   npm install
```


3.- Abre una terminal para preparar el programa
```bash
   npm run dev
 ```
 
4.- Abre otra terminal y corre el siguiente comando
 ```bash
 npm run start
 ```
 
5.- Enviar una secuenta de ADN 
```bash
   method:Post
   url : http://localhost:3000/api/adn/mutation 
   body:  {
            "dna": ["ATGAAAGTAC","TACTGTTGTT","GGACACCCGA","CCTGTAAACG","AAGTGGCCAA","TACAACCGGT","GTTGAAACAC","CCACTGATCG","AGTAGTGAGC","AACTCAAGCA"]
         }
 ```

6.- Obtener informacion de las estadisticas
```bash
   method:Get
   url: http://localhost:3000/api/adn/stats 
```
