/* --------------------------------Modulos-------------------------------- */

const express = require('express');
const routerProductos  = express.Router(); 
const routerCarrito  = express.Router();
const ejs = require('ejs');

/* --------------------------------Admin boolean-------------------------------- */

const administrador = true;

/* --------------------------------Instancia de express-------------------------------- */

const app = express();

/* --------------------------------Middlewares-------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/productos', routerProductos);
app.use('/carrito', routerCarrito);

/* --------------------------------Motor de plantilla-------------------------------- */

app.set('view engine', (__dirname, 'ejs'));

/* --------------------------------Arrays globales-------------------------------- */

let tiempo = new Date();
const dbProductos = [
    { 
        timestamp: tiempo,
        nombre: "Teclado Gamer Redragon K530 Draconic RGB Black Bluetooth USB",
        descripcion: "Teclado Gamer Redragon K530 Draconic RGB Black Bluetooth USB",
        foto: "https://mundofix.com/387852-large_default/teclado-gamer-redragon-k530-draconic-rgb-black-bluetooth-usb.jpg",
        stock: 5,
        precio: 9250,
        id: 1
    },
    { 
        timestamp: tiempo,
        nombre: "Mouse Gamer Redragon M908 Impact RGB USB",
        descripcion: "Mouse Gamer Redragon M908 Impact RGB USB",
        foto: "https://mundofix.com/395584-large_default/mouse-gamer-redragon-m908-impact-rgb-usb.jpg",
        stock: 10,
        precio: 2800,
        id: 2
    },
    { 
        timestamp: tiempo,
        nombre: "Redragon P006 Kunlun L",
        descripcion: "Redragon P006 Kunlun L",
        foto: "https://mundofix.com/400138-large_default/redragon-p006-kunlun-l.jpg",
        stock: 8,
        precio: 3050,
        id: 3
    },
    { 
        timestamp: tiempo,
        nombre: "Redragon GM3CC27 Jade 27 165hz",
        descripcion: "Redragon GM3CC27 Jade 27 165hz",
        foto: "https://mundofix.com/397641-large_default/redragon-gm3cc27-jade-27-165hz.jpg",
        stock: 3,
        precio: 53000,
        id: 4
    }
];

const carritos = [
    {
        system: "System",
        id: 1
    }
];

/* --------------------------------Rutas router productos-------------------------------- */

/*---GETs router productos---*/

routerProductos.get('/', (req, res) => {
    res.status(200).render('pages/index', {dbProductos, administrador}) 
})

routerProductos.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const indiceEnArray = dbProductos.map(producto => producto.id).indexOf(id);
    if (isNaN(id)) {
        return res.status(200).json( { error: 'Ruta no implementada, o el parametro no es un numero' } );
    };
    if ( id < 1 || id > dbProductos.length) {
        return res.status(200).json( { error: 'producto no encontrado'} );
    };
    res.status(200).json({producto: dbProductos[indiceEnArray]});  
})

/*---POSTs router productos---*/

routerProductos.post('/', (req, res) => {
    if(administrador){
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
        res.redirect('/productos')
    } else {
        res.status(200).render('pages/notAdmin.ejs');
    }
});

/*---PUTs router productos---*/

routerProductos.put('/:id', (req, res) => {
    if(administrador){
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
            id: id
        };
        res.status(200).json({
            msg: `Se modifico correctamente el producto: ${dbProductos[indiceEnArray].nombre} con id: ${dbProductos[indiceEnArray].id}`,
            productos: dbProductos
        });
    } else {
        res.status(200).render('pages/notAdmin.ejs');
    }
});

/*---DELETEs---*/

routerProductos.delete('/:id', (req, res) => {
    if(administrador){
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(200).json( { error: 'Ingrese un ID válido' } );
        };
        if ( id < 1 || id > dbProductos.length) {
            return res.status(200).json( { error: 'producto no encontrado'} );
        };
        const indiceEnArray = dbProductos.map(producto => producto.id).indexOf(id);
        dbProductos.splice(indiceEnArray, 1);
        res.redirect('/productos')
    } else {
        res.status(200).render('pages/notAdmin.ejs');
    }
});

/* --------------------------------Rutas router carrito-------------------------------- */

/*---GETs router carrito---*/

routerCarrito.get('/:id/productos', (req, res) => {
    const id = parseInt(req.params.id);  //param del id del carrito
    if (isNaN(id) ) {
        return res.status(200).json( { error: 'Ingrese un ID válido' } );
    };
    if ( id < 1 || id > carritos.length) {
        return res.status(200).json( { error: 'Carrito no encontrado'} );
    };
    const indiceDeCarrito = carritos.map(carrito => carrito.id).indexOf(id); //obtengo con el param la posición del carrito a consultar
    res.status(200).json({carrito: carritos[indiceDeCarrito]})  //imprimo el carrito con los productos agregados
})

/*---POSTs router carrito---*/

routerCarrito.post('/', (req, res) => {
    let lastId = carritos[carritos.length - 1].id;
    let carrito = {
        id: lastId + 1,
        productos: [],
    }
    carritos.push(carrito)
    res.status(200).json({carrito: carritos[carrito.id - 1]})
    /*res.status(200).render('pages/carrito.ejs', {carritos}) logica para renderizar carrito*/
})

routerCarrito.post('/:id/:productoId', (req, res) => {
    const id = parseInt(req.params.id);  //param del id del carrito al cual se va a pushear producto
    const productoId = parseInt(req.params.productoId); // param del id del producto que se va a pushear al carrito recibido por param anteriormente
    if (isNaN(id) || isNaN(productoId) ) {
        return res.status(200).json( { error: 'Ingrese IDs válidos' } );
    };
    if ( id < 1 || id > carritos.length) {
        return res.status(200).json( { error: 'Carrito no encontrado'} );
    };
    if ( productoId < 1 || id > dbProductos.length) {
        return res.status(200).json( { error: 'Producto no encontrado'} );
    };
    const indiceDeCarrito = carritos.map(carrito => carrito.id).indexOf(id); //obtengo con el param la posición del carrito a pushear
    const IndexProductoAPushear = dbProductos.map(producto => producto.id).indexOf(productoId); //obtengo con el param la posición del producto a pushear
    carritos[indiceDeCarrito].productos.push(dbProductos[IndexProductoAPushear]); //dentro de la property "productos" del carrito, pusheo el producto
    res.status(200).json({carrito: carritos[indiceDeCarrito]})  //imprimo el carrito con los productos agregados
})

/*---DELETEs router carrito---*/

routerCarrito.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id); //param del id del carrito
    if (isNaN(id) ) {
        return res.status(200).json( { error: 'Ingrese un ID válido' } );
    };
    if ( id < 1 || id > carritos.length) {
        return res.status(200).json( { error: 'Carrito no encontrado'} );
    };
    const indiceDeCarrito = carritos.map(carrito => carrito.id).indexOf(id); //obtengo con el param la posición del carrito a eliminar
    carritos[indiceDeCarrito].productos = ''; // limpio los productos que había agregado
    carritos.splice(indiceDeCarrito, 1); // elimino el carrito
    res.status(200).json({carritos: carritos})  //imprimo todos los carritos
})

routerCarrito.delete('/:id/productos/:id_prod', (req, res) => {
    const id = parseInt(req.params.id);  //param del id del carrito al cual se le va a eliminar el producto
    const productoId = parseInt(req.params.id_prod); // param del id del producto que se va a eliminar del carrito
    if (isNaN(id) || isNaN(productoId) ) {
        return res.status(200).json( { error: 'Ingrese IDs válidos' } );
    };
    if ( id < 1 || id > carritos.length) {
        return res.status(200).json( { error: 'Carrito no encontrado'} );
    };
    if ( productoId < 1 || id > dbProductos.length) {
        return res.status(200).json( { error: 'Producto no encontrado'} );
    };
    const indiceDeCarrito = carritos.map(carrito => carrito.id).indexOf(id); //obtengo con el param la posición del carrito a editar
    const IndexProductoAEliminar = carritos[indiceDeCarrito].productos.map(producto => producto.id).indexOf(productoId); //dentro del array de productos de mi carrito, obtengo el index del producto a eliminar
    carritos[indiceDeCarrito].productos.splice(IndexProductoAEliminar, 1); //dentro de la property "productos" del carrito, pusheo el producto
    res.status(200).json({carrito: carritos[indiceDeCarrito]})  //imprimo el carrito con los productos agregados
})

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