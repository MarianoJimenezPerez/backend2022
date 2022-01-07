const fs = require('fs');
const fecha = new Date().toString()

try {
    fs.writeFileSync('texto.txt', fecha);
    const archivo1 =  fs.readFileSync('texto.txt', 'utf-8', (err, resp) =>{
        if(err){
            console.error("Se frenó la ejecución")
        } else {
            return resp
        }
    })
    console.log(archivo1)
} catch (error) {
    console.error("Detalle del error: " + error)
}



/*try {
    fs.readFile('package.json', 'utf-8', (error, content) => {
        if(error){
            console.error("No se pudo leer")
        } else {
            const info = {
                contenidoStr: JSON.stringify(content),
                contenidoObj: JSON.parse(content),
                autor: ''
            }
            console.log(info.contenidoObj)
        }
    })
} catch (error) {
    console.error("Detalle del error: " + error)

}*/