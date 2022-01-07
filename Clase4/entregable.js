const fs = require('fs');
const productosDemo = [                                                                                                                                                     
    {                                                                                                                                                    
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
        id: 1                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
        title: 'Calculadora',                                                                                                                              
        price: 234.56,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
        id: 2                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
        title: 'Globo Terráqueo',                                                                                                                          
        price: 345.67,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
        id: 3                                                                                                                                              
    }                                                                                                                                                    
] 
class Contenedor {
    constructor(nombreDeArchivo) {
        this.ruta = nombreDeArchivo;
    }

    //metodo para iniciar el archivo con productos
    montarProductosDemo(){
        try {
            fs.promises.writeFile(this.ruta, JSON.stringify(productosDemo, null, 2), error => {
                if (error) {
                    throw new Error(error);
                } else {
                    console.log('Productos demo montados en el archivo creado');
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
    //metodo leer
    async getAll(){
        try {
            await fs.promises.readFile(this.ruta, 'utf-8', (error, content) => {
                if (error) {
                    throw new Error(error);
                } else {
                    const info = {
                        contentStr: content,
                        contentObj: JSON.parse(content),
                        size: 0
                    }
                    return console.log(info);
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    //metodo guardar
    save(obj){
        this.getAll()
        if(obj.id === undefined){
            obj.id = info.contentObj.length + 1   // si no tiene ID se lo defino
        }
        try {
            fs.appendFile(this.ruta, JSON.stringify(obj, null, 2), (error, content) => {
                if (error) {
                    throw new Error(error);
                } else {
                    return console.log("Se agrego un producto: " + obj.title);
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    //metodo obtener por nombre
    getById(idProducto){
        
    }
    
    //metodo para borrar por id
    deleteById(){
    }
    
    //metodo para borrar todo
    deleteAll(){
    }
}
let db = new Contenedor ('productos.txt');


db.montarProductosDemo()
db.getAll({
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
})

