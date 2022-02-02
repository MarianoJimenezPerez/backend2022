/* --------------------------------Modulos-------------------------------- */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* --------------------------------Productos-------------------------------- */

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
]

/* --------------------------------Rutas-------------------------------- */

app.set('views', path.join('views'));
app.set('view engine', '');

/* --------------------------------Rutas-------------------------------- */

app.get('/productos', (req, res) => {
    res.render('anexo.pug', {listaProductos: productos})
})
app.post('/productos', (req, res) => {
    const productoNuevo = {
        id: productos.length + 1,
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    }
    productos.push(productoNuevo);
    res.render('anexo.pug', {listaProductos: productos})
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