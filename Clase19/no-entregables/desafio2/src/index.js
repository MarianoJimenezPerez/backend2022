const mongoose = require('mongoose');
const UsuarioModel = require('./models/Usuario.model');

const URL = 'mongodb://localhost:27017/desafio2';  //ruta de cclearonexión local y el nombre de mi app

async function cargarUsuarios(listaUsuarios){
    let resultados = [];
    try {
        for(const usuario of listaUsuarios){
            let obj = new UsuarioModel(usuario);
            resultados.push(await obj.save());
        }
    } catch (error) {
        console.error(error)
    }
    return resultados
}

mongoose.connect(URL)  //conecto con mongoose de forma asyncrona
    .then(async () => {
        //bloque de acciones para conexión exitosa
        try {
            // aquí meto mi codigo (o CRUD)
            let resultados = [];
            resultados = await UsuarioModel.deleteMany({})  //borro todo por si lo voy iterando
            let listaUsuarios = [
                {nombre: 'juan', apellido:  'perez', email: 'jp@g.com', password: '123456'},
                {nombre: 'jorge', apellido:  'munoz', email: 'jm@g.com', password: '123456'},
                {nombre: 'aldana', apellido:  'rodrigez', email: 'ar@g.com', password: '123456'}
            ]
            resultados = await cargarUsuarios(listaUsuarios);
            console.log(resultados);
            
        } catch (error) {
            // aquí manejo mi error
            console.error(`Error: ${error}`);
        } finally{
            mongoose.disconnect().catch((err) => {
                console.error(err);
            })
        }
    })
    .catch((err) => {
        //bloque de control
        console.error('Error al conectarse a la DB')
    })