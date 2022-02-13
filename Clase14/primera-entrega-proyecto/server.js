/* --------------------------------Modulos-------------------------------- */
const express = require('express');
const routerProductos  = express.Router(); 
const routerCarrito  = express.Router();

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/productos', routerProductos);
app.use('/carrito', routerCarrito);

/* --------------------------------Arrays globales-------------------------------- */

const dbProductos = [
    { 
        timestamp: "1",
        nombre: "Teclado",
        descripcion: "Este es un teclado mecánico 60%",
        foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        stock: 4,
        precio: 200,
        id: 1
    },
    { 
        timestamp: "1",
        nombre: "Mouse",
        descripcion: "Un mouse de 11 botones",
        foto: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        stock: 10,
        precio: 100,
        id: 2
    }
];

/* --------------------------------Rutas router productos-------------------------------- */

/*---GETs router productos---*/

routerProductos.get('/', (req, res) => {
    res.status(200).json({productos: dbProductos}); 
})

routerProductos.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const indiceEnArray = dbProductos.map(producto => producto.id).indexOf(id);
    if (isNaN(id)) {
        return res.status(200).json( { error: 'El parámetro ingresado no es un número' } );
    };
    if ( id < 1 || id > dbProductos.length) {
        return res.status(200).json( { error: 'producto no encontrado'} );
    };
    res.status(200).json({producto: dbProductos[indiceEnArray]});  
})

/*---POSTs router productos---*/

routerProductos.post('/', (req, res) => {
    let lastId = dbProductos[dbProductos.length - 1].id;  // id del último elemento del array + 1.
    let tiempo = new Date();
    const productoNuevo = {
        timestamp: tiempo,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        foto: req.body.foto,
        stock: req.body.stock,
        precio: req.body.precio,
        id: lastId + 1
    }
    dbProductos.push(productoNuevo);
    res.status(200).json({
        msg: "Se agrego exitosamente el producto: " + productoNuevo.nombre,
        productos: dbProductos
    });
});

/*---PUTs router productos---*/

routerProductos.put('/:id', (req, res) => {
    let tiempo = new Date();
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(200).json( { error: 'Ingrese un ID válido' } );
    };
    if ( id < 1 || id > dbProductos.length) {
        return res.status(200).json( { error: 'producto no encontrado'} );
    };
    const indiceEnArray = dbProductos.map(producto => producto.id).indexOf(id);
    dbProductos[indiceEnArray] = {
        timestamp: tiempo,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        foto: req.body.foto,
        stock: req.body.stock,
        precio: req.body.precio,
        titulo: req.body.titulo,
        id: id
    };
    res.status(200).json({
        msg: `Se modifico correctamente el producto: ${dbProductos[indiceEnArray].nombre} con id: ${dbProductos[indiceEnArray].id}`,
        productos: dbProductos
    });
});

/*---DELETEs---*/

routerProductos.delete('/:id', (req, res) => {
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
        msg: `Se eliminó correctamente el producto: ${dbProductos[indiceEnArray].nombre} con id: ${dbProductos[indiceEnArray].id}`,
        productos: dbProductos
    });
});

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