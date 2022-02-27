/* --------------------------------Modulos-------------------------------- */

import express from 'express'

import { Server as HttpServer} from 'http'
import { Server as Socket } from 'socket.io'

import ContenedorSQL from './contenedores/contenedorSQL.js'

import config from './config.js'

import {fileURLToPath} from 'url';
import { dirname } from 'path';

import path from 'path'

import { engine } from 'express-handlebars'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* --------------------------------Instanciar servidor-------------------------------- */

const app = express();
const httpServer = new HttpServer(app); //creo mi sv http
const io = new Socket(httpServer); //configuro mi sv de io

const productosApi = new ContenedorSQL(config.mariaDB, 'productos')
const mensajesApi = new ContenedorSQL(config.sqlite3, 'mensajes')

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join( __dirname, '../', '/public')));
app.set('views', './views');
app.set('view engine', 'hbs')
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    partialsDir: (path.join(__dirname, '../', '/views/partials/')),
    layoutsDir: (path.join(__dirname, '../', '/views/layouts/'))
}))

/* --------------------------------Websocket-------------------------------- */

io.on('connection', (socket) => { //defino la conexión y recibo con "on" al cliente.
    const productos = productosApi.listarAll();
    const mensajes = mensajesApi.listarAll();

    //envio los productos históricos
    socket.emit('productosHistoricos', productos)

    //envio los mensajes históricos
    socket.emit('mensajesHistoricos', mensajes)

    //escucho nuevos productos
    socket.on('nuevoProducto', async producto => {
        productosApi.guardar(producto)
        io.sockets.emit('productosHistoricos', await productosApi.listarAll())  //actualizo la vista, enviando nuevamente los productos históricos
    })

    //escucho nuevos mensajes
    socket.on('nuevoMensaje', async mensaje => {
        mensaje.fyh = new Date().toLocaleString()
        mensajesApi.guardar(mensaje)
        io.sockets.emit('mensajesHistoricos', await mensajesApi.listarAll())  //actualizo la vista, enviando nuevamente la bandeja histórica
    })
})


/* --------------------------------Rutas-------------------------------- */

app.get('/', (req, res, next) => {
    res.render('index', {})
});

/* --------------------------------Iniciar servidor-------------------------------- */

const PORT = 8080
const server = httpServer.listen(PORT, () => {  //escucho al httpserver, quien contiene el express

    //escribo mi primer archivo con los textos en la db
    

    console.log(
        `
        Servidor Http escuchando en el puerto  ${PORT}
        `
    );
})
server.on("error", error => console.log(`Se detecto un error: ${error}`));