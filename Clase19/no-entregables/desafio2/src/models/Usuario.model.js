const { Schema, model } = require('mongoose'); //llamo al esquema y al modelo de la dependencia mongoosea

const usuarioSchema = new Schema({    //defino mi object document (ODM)
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //campo que no se puede repetir
    },
    password: {
        type: String,
        required: true
    }
})

const UsuarioModel = model('usuarios', usuarioSchema);   //exporto mi modelo y le paso 2 params: el nombre de mi colección a crear y el modelo.

module.exports = UsuarioModel;