import ContenedorFirebase from '../../containers/ContenedorFirebase.js';

class ProductosDaoFirebase extends ContenedorFirebase{
    constructor(){
        super(
            //creo la coleccion pasandole el nombre
            'productos'
        )
    }
}

export default ProductosDaoFirebase;