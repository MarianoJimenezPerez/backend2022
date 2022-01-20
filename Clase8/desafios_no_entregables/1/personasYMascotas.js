// Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales:
// '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
//	GET: devolverá la lista requerida en formato objeto.
// POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato:
// Persona -> { "nombre": ..., "apellido": ..., "edad":... }
// Mascota -> { "nombre":..., "raza":..., "edad":... }


/* --------------------------------Modulos-------------------------------- */

const express = require('express');
const morgan = require('morgan');
const routerPersonas  = express.Router();
const routerMascotas  = express.Router(); 

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */
app.use(morgan('tiny'));
app.use('/api/personas', routerPersonas);
app.use('/api/mascotas', routerMascotas);

/* --------------------------------Servidor-------------------------------- */

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(
        `
        Servidor Http escuchando en el puerto  ${PORT}
        `
    );
})
server.on("error", error => console.log(`Se detecto un error: ${error}`))

/* --------------------------------Arrays globales-------------------------------- */

const dbPersonas = [
    { 
        nombre: "Juan",
        apellido: "Perez",
        edad: 20  
    },
    { 
        nombre: "Oscar",
        apellido: "Perez",
        edad: 25  
    }
]
const dbMascotas = [
    { 
        nombre: "Mylo",
        raza: "Beagle",
        edad: 10  
    },
    { 
        nombre: "Pampa",
        raza: "Labrador",
        edad: 9  
    }
]

/* --------------------------------Rutas-------------------------------- */

routerPersonas.use(express.json());
routerMascotas.use(express.json());   /* para poder recibir el req.body por JSON */

/* --personas--*/

routerPersonas.get('/', (req, res) => {
    res.status(200).send(dbPersonas);
})

routerPersonas.post('/', (req, res) => {
    const newPersona = req.body;
    dbPersonas.push(newPersona);
    res.status(200).send('Se agrego ' + newPersona.nombre + ' como nuevo usuario');
})


/* --mascotas-- */

routerMascotas.get('/', (req, res) => {
    res.status(200).send(dbMascotas);
})

routerMascotas.post('/', (req, res) => {
    const newMascota = req.body;
    dbMascotas.push(newMascota);
    res.status(200).send('Se agrego  ' + newMascota.nombre + ' como nueva mascota');
})

