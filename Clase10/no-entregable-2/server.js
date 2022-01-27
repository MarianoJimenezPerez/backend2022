/* --------------------------------Modulos-------------------------------- */

const express = require('express'); 
const ejs = require('ejs');
const personas = [];

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


/* --------------------------------Motor de plantilla-------------------------------- */

app.set('view engine', (__dirname, 'ejs'));  

/* --------------------------------Rutas-------------------------------- */

app.post('/personas', (req, res) => {
    const datos = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
    }
    personas.push(datos)
    res.redirect('/')
});

app.get('/', (req, res) => {
    res.status(200).render('pages/index', { personas })
    console.log(personas)   
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