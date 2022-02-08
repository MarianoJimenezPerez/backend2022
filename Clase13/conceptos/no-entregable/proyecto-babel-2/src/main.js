const lista = [1,3,5,7];

lista.map(elemento => elemento*elemento)
    .forEach(elemento => console.log(elemento));

// ejecutar npm run build para poder poder recorrer todo lo que esté en la carpeta "src", transpilarlo y colocarlo en la carpeta "dist". Dist es una convención, se utiliza ese nombre para salir a deploy.