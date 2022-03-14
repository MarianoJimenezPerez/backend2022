import mongoose from 'mongoose';
import config from '../utils/config.js'

const URL = config.mongodb.url;


await mongoose.connect(URL);

class ContenedorMongoDB {
    constructor(coleccion, esquema){
        this.coleccion = mongoose.model(coleccion, esquema)
    }

    async listarTodo(){
        try {
            
            const docs = await this.coleccion.find({});
            return docs


        } catch (err) {
            console.log({
                msg: `Se produjo un error al intentar listarTodo desde mongodb en la coleccion ${this.coleccion}: ${err}`
            })
        }
    }
    async listarId(id){
        try {

            const doc = await this.coleccion.find({_id: id});
            return doc

        } catch (err) {
            console.log({
                msg: `Se produjo un error al intentar listarId(${id}) desde mongodb en la coleccion ${this.coleccion}: ${err}`
            })
        }
    }

    async eliminarId(id){
        try {
            const doc = await this.coleccion.deleteOne({_id: id});
            return doc

        } catch (err) {
            console.log({
                msg: `Se produjo un error al intentar eliminarId(${id}) desde mongodb en la coleccion ${this.coleccion}: ${err}`
            }) 
        }
    }
}

export default ContenedorMongoDB;

