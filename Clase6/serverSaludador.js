const http = require('http');

const myPortDefault = 8080;

const server = http.createServer((req, resp) => {
    const fecha = new Date().getHours()

    if(fecha <= 12){
        return resp.end("Buenos días. La hora es "  + JSON.stringify(fecha, null, 2));
    } else if(fecha > 12 && fecha < 19){
        return resp.end("Buenas tardes. La hora es "  + JSON.stringify(fecha, null, 2));
    }else if(fecha > 20 && fecha < 5 ){
        return  resp.end("Buenas noches. La hora es "  + JSON.stringify(fecha, null, 2));
    }
})

const connectedServer = server.listen(myPortDefault, () => {  //utilizo la variable donde recibo mi servidor y le aplico el metodo listen para CONECTARLO y escuchar el puerto definido
    console.log(
        `
        Servidor Http escuchando en el puerto ${connectedServer.address().port}
        `
    ); 
})