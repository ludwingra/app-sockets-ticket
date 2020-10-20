const express = require('express');
// Importamos socketIO.io y http de node
const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();
// Creamos el servidor y le pasamos la configuración de express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = conexión directa con el servidro, Esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);

});