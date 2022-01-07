const operacion = (numero1, numero2, operar) => operar(numero1, numero2)  // declara el callback en la misma linea

const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const mutiplicar = (a, b) => a * b
const dividir = (a, b) => a / b


console.log(operacion(1, 4, restar))


//node calculadoraCallback.js