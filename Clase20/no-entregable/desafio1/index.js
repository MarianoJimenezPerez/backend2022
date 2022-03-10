import mongoose from "mongoose"
import UsuarioModel from "./models/Usuarios.model.js"

const URL = 'mongodb+srv://marianoroot:5535538@ecommerce.b7leh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URL)
.then(async () => {
    console.log('Cloud DB conectada')
    try {
        /* ------------------------------------------------------------------- */
        /*   Escritura de la base de datos: ecommerce, collection: usuarios    */
        /* ------------------------------------------------------------------- */

        const listaUsuarios = [
            { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
            { nombre: 'María', apellido: 'García', dni: '29575148' },
            { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
            { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
        ]
        for ( const usuario of listaUsuarios){
            const obj = new UsuarioModel(usuario);
            await obj.save();
        }

        /* ------------------------------------------------------------------- */
        /*          Listar usuarios representándolos en la consola             */
        /* ------------------------------------------------------------------- */

        let usuarios = await UsuarioModel.find({})
        usuarios.forEach(usuario => {
            console.log(JSON.stringify(usuario))
        })


    } catch (error) {
        console.log('Se produjo un error')
    }
})
.catch((err)=> {
    console.error(err)
})