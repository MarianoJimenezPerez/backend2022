import mongoose from "mongoose"

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: {
        type: String, unique: true
    }
});

const UsuarioModel = mongoose.model('usuarios', usuarioSchema); 

export default UsuarioModel;