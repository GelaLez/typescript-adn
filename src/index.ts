import Server from './models/server';
import dotenv from 'dotenv';

// Configuracion del dot.env
dotenv.config();

const server = new Server();

server.listen();
