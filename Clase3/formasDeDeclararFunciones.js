// declaración clásica
function sumar (a, b, c){
    return a + b + c
}

// declaración con arrow función y varios params
const sumar2 = (a, b, c) => {
    return a + b + c
}
// declaración con un solo param, con retorno implísito
const duplicar = soloparam => soloparam*2

console.log(sumar(1, 1, 1))
console.log(sumar2(1, 1, 1))
console.log(duplicar(3))

//node formasDeDeclararFunciones.js