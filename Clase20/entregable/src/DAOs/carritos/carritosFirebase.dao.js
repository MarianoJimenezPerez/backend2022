import ContenedorFirebase from '../../containers/ContenedorFirebase.js';

class CarritosDaoFirebase extends ContenedorFirebase{
    constructor(){
        super(
            //creo la coleccion pasandole el nombre
            'carritos'
        )
    }
}

export default CarritosDaoFirebase;