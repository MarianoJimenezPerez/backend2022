const { Schema, model } = require('mongoose'); //llamo al esquema y al modelo de la dependencia mongoosea

const productSchema = new Schema({    //defino mi object document (ODM)
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
})

const productModel = model('products', productSchema);   //exporto mi modelo y le paso 2 params: el nombre de mi colección a crear y el modelo.

module.exports = productModel;