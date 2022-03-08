import mongoose from "mongoose"

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    }
})

const UsuarioModel = model('usuarios', usuarioSchema); 

export default UsuarioModel;