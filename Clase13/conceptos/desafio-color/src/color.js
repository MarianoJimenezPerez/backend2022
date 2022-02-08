const generarAleatorio = () => Math.floor(Math.random() * 256);


class Color {
    get() {
        let color = `rgb( ${generarAleatorio()}, ${generarAleatorio()}, ${generarAleatorio()})`
        return color
    }
}

const color1 = new Color();
console.log(color1.get());

//ejecutar npm run build para transpilar a ES5, donde no existían las clases. El archivo se creará en la carpeta dist.
//ejecutar npm run serve para ejecutar el codigo ES5 e imprimir un color aleatorio por consola