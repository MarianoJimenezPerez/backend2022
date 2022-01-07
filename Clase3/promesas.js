/*
Una Promesa es un objeto que encapsula una operación, y que permite definir acciones
a tomar luego de finalizada dicha operación, según el resultado de la misma. Para ello,
permite asociar manejadores que actuarán sobre un eventual valor (resultado) en caso de éxito,
o la razón de falla (error) en caso de una falla.
Al igual que con los callbacks, este mecanismo permite definir desde afuera de una función un
bloque de código que se ejecutará dentro de esa función, dependiendo del resultado. A diferencia de los callbacks,
en este caso se definirán dos manejadores en lugar de uno solo. Esto permite evitar callback hells como veremos más adelante

*/

const dividir =  (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
        reject('no se puede dividir por cero')
        } else {
        resolve(dividendo / divisor)
        }
    })
}

dividir(8, 2)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
        })
    .catch(error => {
        console.log(`error: ${error}`)
        }) 

// node promesas.js