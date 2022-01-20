/* --------------------------------Modulos-------------------------------- */
const express = require('express');
const router  = express.Router(); 

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use('/api', router);

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

/*
    1) Servidor base con express y router. Para poder utilizarlo se deberá ejecutar en consola:

        npm i express.

    2) Si se desea agregar morgan declarar en modulos:
    
        const morgan = require('morgan');

    e instalar en consola con:

        npm i morgan

    3) Si se desea agregar una carpeta public o cualquier carpeta estática, agregar en middlewares:

        app.use(express.static('public')); 
 */