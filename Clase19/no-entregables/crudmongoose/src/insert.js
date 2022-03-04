const Product = require('./models/Product');
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/ecommerce';  //ruta de conexión local y el nombre de mi app

mongoose.connect(URL)  //conecto con mongoose de forma asyncrona
    .then(async () => {
        //bloque de acciones para conexión exitosa
        try {
            // aquí meto mi codigo (o CRUD)
            const prod1 = new Product({
                name: 'Mouse',
                description: 'Un mouse de última generación',
                price: 200
            })
            
            const prod2 = new Product({
                name: 'Teclado',
                description: 'Un teclado de última generación',
                price: 500
            })

            let doc = await prod2.save();
            console.log(doc)
            
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