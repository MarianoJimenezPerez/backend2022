const Product = require('./models/Product');
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/ecommerce';  //ruta de conexión local y el nombre de mi app

mongoose.connect(URL)  //conecto con mongoose de forma asyncrona
    .then(async () => {
        //bloque de acciones para conexión exitosa
        try {
            // aquí meto mi codigo (o CRUD)
            let resultado = await Product.find();
            console.log(resultado)
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