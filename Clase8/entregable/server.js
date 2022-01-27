/* --------------------------------Modulos-------------------------------- */
const express = require('express');
const router  = express.Router();
const morgan = require('morgan');

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/productos', router);
app.use(express.static('public'));

/* --------------------------------Arrays globales-------------------------------- */

const dbProductos = [
    { 
        id: 1,
        titulo: "Escuadra",
        precio: 200,
        miniatura: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    },
    { 
        id: 2,
        titulo: "Calculadora",
        precio: 300,
        miniatura: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    }
];

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

/* --------------------------------Rutas-------------------------------- */


/*---GETs---*/
router.get('/', (req, res) => {
    res.status(200).json({productos: dbProductos});  
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indiceEnArray = dbProductos.map(producto => producto.id).indexOf(id);
    if (isNaN(id)) {
        return res.status(200).json( { error: 'El parámetro ingresado no es un número' } );
    };
    if ( id < 1 || id > dbProductos.length) {
        return res.status(200).json( { error: 'producto no encontrado'} );
    };
    res.status(200).json({producto: dbProductos[indiceEnArray]});  
});


/*---POSTs---*/

router.post('/', (req, res) => {
    const productoNuevo = {
        id: dbProductos.length + 1,
        titulo: req.body.titulo,
        precio: req.body.precio,
        miniatura: req.body.miniatura
    }
    dbProductos.push(productoNuevo);
    res.status(200).json({
        msg: "Se agrego exitosamente el producto: " + productoNuevo.titulo,
        productos: dbProductos
    });
});

/*---PUTs---*/

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(200).json( { error: 'Ingrese un ID válido' } );
    };
    if ( id < 1 || id > dbProductos.length) {
        return res.status(200).json( { error: 'producto no encontrado'} );
    };
    const indiceEnArray = dbProductos.map(producto => producto.id).indexOf(id);
    dbProductos[indiceEnArray] = {
        id: id,
        titulo: req.body.titulo,
        precio: req.body.precio,
        miniatura: req.body.miniatura
    };
    res.status(200).json({
        msg: "Se modifico correctamente el producto: " + id,
        productoModificado: dbProductos[id - 1],
        productos: dbProductos
    });
});

/*---DELETESs---*/

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(200).json( { error: 'Ingrese un ID válido' } );
    };
    if ( id < 1 || id > dbProductos.length) {
        return res.status(200).json( { error: 'producto no encontrado'} );
    };
    const indiceEnArray = dbProductos.map(producto => producto.id).indexOf(id);
    dbProductos.splice(indiceEnArray, 1);
    res.status(200).json({
        msg: "Se eliminó correctamente el producto: " + id,
        productos: dbProductos
    });
});