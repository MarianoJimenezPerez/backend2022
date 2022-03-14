import ContenedorMongoDB from '../../containers/ContenedorMongoDB.js';

class ProductosDaoMongoDB extends ContenedorMongoDB{
    constructor(){
        super(
            //invoca al constructor de la clase padre, con lo cual le paso los params de coleccion y esquema
            'productos',
            {
                name: {type: String, require: true},
                description: {type:String, require: true},
                price: {type: Number, require: true},
                thumbnail: {type: String, require: true}
            }
        )
    }
    /* Cumple la función de un update */
    async actualizarNombre(valorViejo, valorNuevo){
        try {
            const doc = await this.coleccion.updateOne({name: valorViejo, name: valorNuevo})
            return doc
        } catch (err) {
            console.log({
                msg: `Se produjo un error al intentar actualizarNombre(${valorViejo}): ${err}`
            }) 
        }
    }
}

export default ProductosDaoMongoDB;