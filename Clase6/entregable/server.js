const express = require('express');

const fs = require('fs');

const myPortDefault = 8080;   

const productos =  fs.readFileSync('productos.txt', 'utf-8', (err, resp) =>{
    if(err){
        console.error("Se frenó la ejecución")
    } else {
        return resp
    }
})
const productosParseados = JSON.parse(productos, null, 2);

const app = express();                

//home del sitio
app.get('/', (req, res) => {          
    res.send(
        `
        <h1>Bienvenido a mi primer server con express</h1> 
        <p>utiliza las rutas <a href="/productos">/productos</a> o <a href="/productoRandom">/productoRandom</a> para poder navegar</p>
        `
    );
})
//slash productos del sitio
app.get('/productos', (req, res) =>{
    const respuesta = {
        code: 200,
        msg: productosParseados
    };
    res.send(respuesta);
})
//slash productosRandom del sitio
app.get('/productoRandom', (req, res) =>{
    const productosParseados = JSON.parse(productos, null, 2);
    function obtenerProductoRandom(array){
        const index = Math.floor(Math.random(array) * array.length);
        return (array[index])
    }
    const productoRandom = obtenerProductoRandom(productosParseados)
    const respuesta = {
        code: 200,
        msg: productoRandom
    }
    res.send(respuesta);
})

const server = app.listen(myPortDefault, () => {
    console.log(
        `
        Servidor Http escuchando en el puerto  ${myPortDefault}
        `
    );
})

server.on("error", error => console.log(`Se detecto un error: ${error}`));