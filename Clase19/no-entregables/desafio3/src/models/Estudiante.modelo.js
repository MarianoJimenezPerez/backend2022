const { Schema, model } = require('mongoose'); //llamo al esquema y al modelo de la dependencia mongoosea

const estudianteSchema = new Schema({    //defino mi object document (ODM)
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true,
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    curso: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: true,
    },
})

const EstudianteModel = model('estudiantes', estudianteSchema);   //exporto mi modelo y le paso 2 params: el nombre de mi colección a crear y el modelo.

module.exports = EstudianteModel;