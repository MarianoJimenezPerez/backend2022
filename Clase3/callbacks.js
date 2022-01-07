// un callback es una función que se envía como argumento a otra función
// la intención es que la función que hace de receptora, ejectute la función que se le esta pasando por parametro


/*

Algunas convenciones
-El callback siempre es el último parámetro
-El callback suele ser una función que recibe dos parámetros
-La función llama al callback al terminar de ejecutar todas sus operaciones
-Si la operación fue exitosa, la función llamará al callback pasando null como primer parámetro y si generó algún resultado este se pasará como segundo parámetro
-Si la operación resultó en un error, la función llamará al callback pasando el error obtenido como primer parámetro

*/

function escribirYLoguear(texto, callbackParaLoguear) {   
    console.log(texto)
    callbackParaLoguear('archivo escrito con éxito') //a pesar de que el callback aca esta definido, puede variar su nombre, es algo que se espera
    }
    
escribirYLoguear('El texto que yo quiera', (mensajeParaLoguear) => { //muta el callback, pero hace lo mismo, imprimir el mensaje declarado
    const fecha = new Date().toLocaleDateString()
    console.log(`${fecha}: ${mensajeParaLoguear}`)
    })
escribirYLoguear('El texto que yo quiera', (loQueSeMeCante) => {    //muta el callback, pero hace lo mismo, imprimir el mensaje declarado
        const fecha = new Date().toLocaleDateString()
        console.log(`${fecha}: ${loQueSeMeCante}`)
    })

//estructura típica de callback

const ejemploCallback = (error, resultado) => {
    if(error){
        //preguntamos si existe el error y hacemos algo con el, siempre primero!
    }
    else{
        //si pasa el if, es porque llegamos al resultado. Acá hacemos algo con él
    }
}


//$ node callbacks.js