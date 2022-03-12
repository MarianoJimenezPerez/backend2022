import config from '../utils/config.js'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection,  getDocs} from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyDEsiFWBOnvEJNXgG2uscsl0V7Hfcs_RAA",
    authDomain: "ecommerce2-76911.firebaseapp.com",
    projectId: "ecommerce2-76911",
    storageBucket: "ecommerce2-76911.appspot.com",
    messagingSenderId: "177174538913",
    appId: "1:177174538913:web:11feea86457e222f0b1ee0"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class ContenedorFirebase {
    constructor(coleccion){
        this.coleccion = collection(db, coleccion) //creo la colección con el nombre pasado por params
    }

    async listarTodo(){
        try {
            console.log(this.coleccion._path.segments[0])
            // si la coleccion es productos, imprimo valores de productos
            if(this.coleccion._path.segments[0] = "productos"){ 
                const snapshot = await getDocs(collection(db, this.coleccion._path.segments[0]))
                const productos = []
                snapshot.forEach((doc) => {
                    productos.push(doc.data())  //extraigo y pusheo el dato de cara doc analizado
                });
                return productos;
                
            } 
            // si la coleccion es carritos, imprimo valores de carritos
            if (this.coleccion._path.segments[0] = "carritos"){
                
                const snapshot = await getDocs(collection(db, this.coleccion._path.segments[0]))
                const carritos = []
                snapshot.forEach((doc) => {
                    carritos.push(doc.data()) //extraigo y pusheo el dato de cara doc analizado
                });
                return carritos;
            }

        } catch (err) {
            console.log({
                msg: `Se produjo un error al intentar listarTodo desde firebase en la coleccion ${this.coleccion._path.segments[0]}: ${err}`
            })
        }
    }
}

/*const coleccionProductos = collection(db, 'productos');
const objProducto = new ContenedorFirebase(coleccionProductos);

await objProducto.listarTodo()*/


export default ContenedorFirebase;