const lista = [1,3,5,7];

lista.map(elemento => elemento*elemento)
    .forEach(elemento => console.log(elemento));


// ejecutar npm run build para compilar a ES5 (Ya se agrego esa linea de script en el package.json)