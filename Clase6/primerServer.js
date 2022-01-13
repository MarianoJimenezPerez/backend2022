const http = require('http');   //requiero http de manera nativa

const fs = require('fs');

const myPortDefault = 8080;   //defino el puerto default 

const server = http.createServer((req, resp) => {     //utilizo la variable donde recibo el http, y DEFINO un servidor con el metodo createServer
    const productos =  fs.readFileSync('productos.txt', 'utf-8', (err, resp) =>{
        if(err){
            console.error("Se frenó la ejecución")
        } else {
            return resp
        }
    })
    const respuesta = {
        code: 200,
        msg: productos
    }
    resp.end(JSON.stringify(respuesta, null, 2));
})

const connectedServer = server.listen(myPortDefault, () => {  //utilizo la variable donde recibo mi servidor y le aplico el metodo listen para CONECTARLO y escuchar el puerto definido
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`); 
})