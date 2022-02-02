/* --------------------------------Modulos-------------------------------- */
const express = require('express');
const handlebars = require('express-handlebars');   

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

app.get('/productos', (req, res) => {
    res.render('table', {listaProductos: productos});
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

/* --------------------------------Engine-------------------------------- */

app.set('view engine', 'txt')
app.set('views', './views')
app.engine(
    'txt',
    handlebars({
        extname: '.txt',
        defaultLayout: 'index.txt',
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials/"
    })
);