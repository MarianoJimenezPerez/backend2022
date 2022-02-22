const { options } = require('./utils/options');
const modelo = require ('./modelo');

const modeloArticulos = new modelo(options)

const articulos = [
    {nombre: 'mouse', codigo: '13214', precio: 20, stock: 20},
    {nombre: 'teclado', codigo: '13215', precio: 220, stock: 50},
    {nombre: 'monitor', codigo: '1321', precio: 420, stock: 30},
    {nombre: 'base', codigo: '123', precio: 270, stock: 25}
];

modeloArticulos.crearTabla()
    .then(() => {
        console.log(`Se creo una nueva tabla`);
        return modeloArticulos.insertar(articulos);
    })
    .then(() => {
        console.log(modeloArticulos);
    })
    .finally(() => {
        modeloArticulos.cerrarConexion();
    });