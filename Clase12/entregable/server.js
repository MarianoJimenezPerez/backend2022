/* --------------------------------Modulos-------------------------------- */

const express = require('express');
const {Server: HttpServer } = require('http');
const {Server: IOServer } = require('socket.io');
const fs = require('fs');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();
const httpServer = new HttpServer(app); //creo mi sv http
const io = new IOServer(httpServer); //configuro mi sv de io

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


/* --------------------------------Globales-------------------------------- */

const productos = [
    {
        title: "Escuadra",
        price: 123.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        id: 1
    },
    {
        title: "Calculadora",
        price: 234.56,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        id: 2
    },
    {
        title: "Globo Terráqueo",
        price: 345.67,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        id: 3
    }
];

let date = new Date
const mensajes = [
    {
        email: "System",
        message: "Bienvenido",
        hour: `[${date.getHours()}:${date.getMinutes()}]` // envio la fecha en formato [hora:minutos] de cuando se conecta el socket
    }
];

/* --------------------------------Funciones-------------------------------- */

function escribirArchivo(){
    let productosJson = JSON.stringify(productos);
    try {
        fs.writeFileSync('productos.txt', productosJson);
        const archivo1 =  fs.readFileSync('productos.txt', 'utf-8', (err, resp) =>{
            if(err){
                console.error("Se frenó la ejecución. Archivo ilegible")
            } else {
                return resp
            }
        })
    } catch (error) {
        console.error("Detalle del error: " + error)
    }
}

/* --------------------------------Websocket-------------------------------- */

io.on('connection', (socket) => { //defino la conexión y recibo con "on" al cliente.

    //envio los productos históricos
    socket.emit('productosHistoricos', productos)

    //envio los mensajes históricos
    socket.emit('mensajesHistoricos', mensajes)

    //escucho nuevos productos
    socket.on('nuevoProducto', data => {
        data.id = productos.length + 1;
        productos.push(data)
        escribirArchivo()
        io.sockets.emit('productosHistoricos', productos)  //actualizo la vista, enviando nuevamente los productos históricos
    })

    //escucho nuevos mensajes
    socket.on('nuevoMensaje', data => {
        mensajes.push(data)
        io.sockets.emit('mensajesHistoricos', mensajes)  //actualizo la vista, enviando nuevamente la bandeja histórica
    })
})

/* --------------------------------Servidor-------------------------------- */

const PORT = 8080
const server = httpServer.listen(PORT, () => {  //escucho al httpserver, quien contiene el express

    //escribo mi primer archivo con los textos en la db
    escribirArchivo()

    console.log(
        `
        Servidor Http escuchando en el puerto  ${PORT}
        `
    );
})
server.on("error", error => console.log(`Se detecto un error: ${error}`));