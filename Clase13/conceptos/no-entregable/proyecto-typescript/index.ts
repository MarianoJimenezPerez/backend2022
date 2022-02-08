export = {}; // sirve para que typescript comience a trabajar con un modulo

const generarAleatorio = ():number => Math.floor(Math.random() * 256);

class Color {
    get():string{
        let color:string = `rgb( ${generarAleatorio()}, ${generarAleatorio()}, ${generarAleatorio()})`
        return color;
    }
}

const color1:Color = new Color();
console.log(color1.get());