/* --------------------------------Modulos-------------------------------- */

const express = require('express');
const {Server: HttpServer } = require('http');
const {Server: IOServer } = require('socket.io');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/* --------------------------------Sockets-------------------------------- */

io.on('connection', (socket) => { //defino la conección y recibo con "on" al cliente. Si quiero enviar, envío con "emit". 
    console.log(`Usuario conectado, id: ${socket.id}`) // Si quiero emitir a todos mis sockets utilizo sockets en plural io.sockets.emit
    socket.on('mensaje', data => {  //escucho los mensajes "mensaje" que me envía el cliente y se los envío a todos mis sockets con evento "mensajes"
        io.sockets.emit('mensajes', data)
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