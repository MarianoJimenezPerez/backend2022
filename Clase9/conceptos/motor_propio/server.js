/* --------------------------------Modulos-------------------------------- */
const express = require('express');
const fs = require('fs');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/* --------------------------------Motor de plantilla-------------------------------- */

app.engine('cte', async (filePath, options, cb) => {
    try {
        const contenido = await fs.readFile(filePath);
        const htmlGenerado = contenido
            .toString()
            .replace('++mensaje++', options.mensaje);
        cb(null, htmlGenerado);
    } catch (error) {
        cb(new Error(error), null);
    }
});

/* --------------------------------Ruta de plantilla y configuracion-------------------------------- */

app.set('view engine', 'cte');
app.set('views', (__dirname, 'views'));

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

app.get('/', (req, res) => {
    const datos = {
        mensaje: "primer mensaje desde mi propio motor de plantillas"
    }
    res.status(200).render('plantilla', datos);  
})