// Express nos permite definir, para cada tipo de petición HTTP
// que llegue a una determinada URL, qué acciones debe tomar, 
// mediante la definición de un callback para cada caso que consideremos necesario incluir en nuestra API.

const express = require('express');   //requiero express, previamente habiendo instalado el framework
const myPortDefault = 8080;           //defino mi puerto default

const app = express();                //defino un nuevo servidor

app.get('/', (req, res) => {          //defino la respuesta en el metodo que quiera (get, post, put, delete) y path o slug que quiera
    res.send("Home de mi API");
})

const server = app.listen(myPortDefault, () => {     //utilizo la variable donde recibo mi servidor y le aplico el metodo listen para CONECTARLO y escuchar el puerto definido
    console.log(
        `
        Servidor Http escuchando en el puerto  ${myPortDefault}
        `
    );
})

server.on("error", error => console.log(`Se detecto un error: ${error}`)) //escucho los errores en mi server conectado