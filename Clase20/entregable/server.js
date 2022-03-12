/* --------------------------------Modulos-------------------------------- */

import express from "express";
import ProductosDaoMongoDB from "./src/DAOs/productos/productosMongo.dao.js";
import CarritosDaoMongoDB from "./src/DAOs/carritos/carritosMongo.dao.js";
import ProductosDaoFirebase from "./src/DAOs/productos/productosFirebase.dao.js";
import CarritosDaoFirebase from "./src/DAOs/carritos/carritosFirebase.dao.js";

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------DAOs-------------------------------- */

const objProductoDao = new ProductosDaoMongoDB();
const objCarritoDao = new CarritosDaoMongoDB();
const objFirebaseProductoDao = new ProductosDaoFirebase();
const objFirebaseCarritoDao = new CarritosDaoFirebase();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/* --------------------------------Rutas-------------------------------- */

app.get('/productos', async (req, res) => {  //defino como async para poder indicar el await
    res.status(200).json(await objProductoDao.listarTodo());  //para poder invocar el método, se utiliza await porque así está declarado
})

app.get('/carritos', async (req, res) => {  
    res.status(200).json(await objCarritoDao.listarTodo()); 
})

app.get('/f/productos', async (req, res) => {  
    res.status(200).json(await objFirebaseProductoDao.listarTodo());  
})
app.get('/f/carritos', async (req, res) => {  
    res.status(200).json(await objFirebaseCarritoDao.listarTodo());  
})
/* --------------------------------Servidor-------------------------------- */

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(
        `
        Servidor Http escuchando en el puerto  ${PORT}
        `
    );
})
server.on("error", error => console.log(`Se detecto un error: ${error}`));
