/* --------------------------------Modulos-------------------------------- */
const express = require('express');
const path = require('path');
const pug = require('pug');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


/* --------------------------------Motor de plantilla-------------------------------- */

app.set('views', path.join('views'));
app.set('view engine', '');

/* --------------------------------Rutas-------------------------------- */

app.get('/datos', (req, res) => {
    const datos = {
        titulo: req.query.titulo,
        min: req.query.min,
        max: req.query.max,
        nivel: req.query.nivel
    }
    console.log(req.query)
    res.render('layout.pug', { datos })
});

/* --------------------------------Servidor-------------------------------- */

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(
        `
        Servidor Http escuchando en el puerto  ${PORT}
        `
    );
})
server.on("error", error => console.log(`Se detecto un error: ${error}`));