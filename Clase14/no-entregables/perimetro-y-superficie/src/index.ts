import express from "express";
import { Perimetro } from "./lib/perimetro";

const app = express();
const PORT = 8080;
const objPerimetro = new Perimetro();

app.get('/perimetro/:figura/:param1/:param2', (req, res) =>{
    let{ figura, param1, param2 } = req.params;
    let resultado = 0;
    switch (figura) {
        case 'cuadrado': 
            resultado = objPerimetro.cuadrado(Number(param1));
            break;
        case 'rectangulo':
            resultado = objPerimetro.rectangulo(Number(param1), Number(param2))
            break;
        case 'circulo':
            resultado = objPerimetro.circulo(Number(param1))
            break;
        default:
            break;
    }
    res.status(200).json({
        calculo: 'perimetro',
        figura,
        param1,
        param2,
        resultado
    })
});

app.get('*', (req, res) => {
    res.status(400).json(
        {
            codigo: 400,
            error: "Not found"
        }
    )
})

app.listen(PORT, () => {
    console.log("Servidor montado en el puerto" + PORT);
})