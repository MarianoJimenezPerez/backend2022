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
}

export default ProductosDaoMongoDB;