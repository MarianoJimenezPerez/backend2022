/* --------------------------------Modulos-------------------------------- */

const express = require('express'); 
const ejs = require('ejs');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


/* --------------------------------Motor de plantilla-------------------------------- */

app.set('view engine', (__dirname, 'ejs'));  

/* --------------------------------Rutas-------------------------------- */

app.get('/datos', (req, res) => {
    const datos = {
        titulo: req.query.titulo,
        min: req.query.min,
        max: req.query.max,
        nivel: req.query.nivel
    }
    res.status(200).render('pages/index', datos)    
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