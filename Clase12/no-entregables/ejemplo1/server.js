/* --------------------------------Modulos-------------------------------- */

const express = require('express');
const {Server: HttpServer } = require('http');
const {Server: IOServer } = require('socket.io');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();
const httpServer = new HttpServer(app); //creo mi sv http
const io = new IOServer(httpServer); //configuro mi sv de io

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/* --------------------------------Websocket-------------------------------- */

const mensajes = [
    {
        autor: "System",
        mensaje: "Bienvenido"
    }
];

io.on('connection', (socket) => { //defino la conexión y recibo con "on" al cliente.

    //envio la bandeja histórica
    socket.emit('bandejaHistorica', mensajes)

    //escucho nuevos mensajes
    socket.on('nuevoMensaje', data => {
        mensajes.push(data)
        io.sockets.emit('bandejaHistorica', mensajes)  //actualizo la vista, enviando nuevamente la bandeja histórica
    })
})

/* --------------------------------Servidor-------------------------------- */

const PORT = 8080
const server = httpServer.listen(PORT, () => {  //escucho al httpserver, quien contiene el express
    console.log(
        `
        Servidor Http escuchando en el puerto  ${PORT}
        `
    );
})
server.on("error", error => console.log(`Se detecto un error: ${error}`));