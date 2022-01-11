const listaNumeros = {}

function generarAleatorio(min, max){
    let int = parseInt(Math.random() * max + min)
    return int
}

function generarConteoAleatorio(min, max, iteraciones) {
    let clave = 0;
    for (i = 0; i < iteraciones; i++){
        clave = generarAleatorio(min, max)
        if(listaNumeros.hasOwnProperty(clave.toString())){
            listaNumeros[clave.toString()] += 1
        } else {
            listaNumeros[clave.toString()] = 1
        }
    }
    return console.log(listaNumeros);
}

generarConteoAleatorio(1, 20, 10000);