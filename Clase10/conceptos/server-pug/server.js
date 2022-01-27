/* --------------------------------Modulos-------------------------------- */
const express = require('express');
const router  = express.Router(); 
const pug = require('pug');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', router);

/* --------------------------------Motor de plantilla-------------------------------- */

app.set('views','./views');
app.set('view engine', 'pug');

/* --------------------------------Rutas-------------------------------- */

router.get('/', (req, res) => {
    const mensaje = "Aquí pongo el texto que reemplazará mi hook"; // utilizo una variable para almacenar ( si quiero ), lo que voy a imprimir
    res.status(200).render('hello.pug', {h1ARenderizar: mensaje})    // utilizo el .render para enviar, como atributo nombre de la view y como objeto, nombre del hook y mi variable con el texto asignado
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
