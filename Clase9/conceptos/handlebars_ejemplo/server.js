/* --------------------------------Modulos-------------------------------- */
const express = require('express');
const router  = express.Router(); 

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', router);

/* --------------------------------Motor de plantilla-------------------------------- */


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

/* --------------------------------Rutas-------------------------------- */

router.get('/', (req, res) => {
    res.status(200).send('get ok');  
})
