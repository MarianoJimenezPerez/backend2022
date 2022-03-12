import ContenedorMongoDB from '../../containers/ContenedorMongoDB.js';

class CarritosDaoMongoDB extends ContenedorMongoDB{
    constructor(){
        super(
            //invoca al constructor de la clase padre, con lo cual le paso los params de coleccion y esquema
            'carritos',
            {
                products: {type:String},  //array donde se pushearán los productos que se agreguem. No paso id porque lo genera auto la DB
            }
        )
    }
}

export default CarritosDaoMongoDB;