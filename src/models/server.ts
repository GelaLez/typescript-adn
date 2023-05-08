import express, { Application } from 'express';
import routesAdn from '../routes/adn.routes';
import connection from '../db/connection';
import cors from 'cors';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';
    this.middweres();
    this.routes();
    this.conectarDB()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`start on port`, this.port)
    })
  }

  middweres() {
    // parseo del body
    this.app.use(express.json())
    // cors
    this.app.use(cors())
  }

  routes() {
    this.app.use('/api/adn', routesAdn);
  }

  conectarDB() {
    connection.connect((err) => {
      if (err) throw err;
      console.log('conectado a la base de datos')
    })
  }

}

export default Server;