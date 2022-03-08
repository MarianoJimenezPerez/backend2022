import mongoose from "mongoose"
import UsuarioModel from "./models/Usuarios.model.js"

const URL = 'mongodb+srv://marianoroot:<password>@ecommerce.b7leh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

moongose.connect(URL)
.then(async () => {
    console.log('Cloud DB conectada')
    try {
        const usuarios = [
            { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
            { nombre: 'María', apellido: 'García', dni: '29575148' },
            { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
            { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
        ]
        for ( const usuario of usuarios){
            const obj = new UsuarioModel(usuario);
            await obj.save();
        }

        let usuario = await UsuarioModel.find({})

    } catch (error) {
        console.log('Se produjo un error')
    }
})
.catch((err)=> {
    console.error(err)
})