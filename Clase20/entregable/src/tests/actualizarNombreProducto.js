import ProductosDaoMongoDB from "../DAOs/productos/productosMongo.dao.js";

const productoPrueba = new ProductosDaoMongoDB();

let encontrado = await productoPrueba.actualizarNombre("test", "teclado");

console.log(encontrado)