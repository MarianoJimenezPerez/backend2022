import ContenedorMongoDB from "../containers/ContenedorMongoDB.js";

/* Eliminar ID en coleccion productos de mongoDB*/
const productoPrueba = new ContenedorMongoDB('productos', {
    name: {type: String, require: true},
    description: {type:String, require: true},
    price: {type: Number, require: true},
    thumbnail: {type: String, require: true}
})

let encontrado = await productoPrueba.eliminarId({_id: "622be7d58017ee30fc349c1c"}) //cambiar id, ya no existe

console.log(encontrado)

/* Eliminar ID en coleccion carritos de mongoDB*/
const carritoPrueba = new ContenedorMongoDB('carritos', {
    products: {type:String}
})


encontrado = await carritoPrueba.eliminarId({_id: "622bf99c8017ee30fc349c1d"}) //cambiar id, ya no existe

console.log(encontrado)