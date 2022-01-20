// La clase Router se usa para crear un nuevo objeto de enrutador,
// que es una instancia aislada de middleware y rutas. Se utiliza
// cuando se desea crear un nuevo objeto de enrutador para manejar solicitudes.

// El Router de express nos permite crear múltiples "mini aplicaciones"
// para que se pueda asignar un espacio de nombre al api público, autenticación
// y otras rutas en sistemas de enrutamiento separados.


/* --------------------------------Modulos-------------------------------- */

const express = require('express');
const router  = express.Router(); /* Puedo tener más de uno en diferentes variables y luego definirles la ruta en los middlewares*/

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use('/api', router);  /* Acá defino cara router que tenga, en este caso solo definí 1 router*/

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

router.get('/recurso', (req, res) => {
    res.status(200).send('get ok');    /* --Le envío el codigo de respuesta (exitoso 200) y la respuesta-- */
})

router.post('/recurso', (req, res) => {
    res.status(200).send('post ok');
})



