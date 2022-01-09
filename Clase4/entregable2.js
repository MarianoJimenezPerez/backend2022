const fs = require("fs");

const writeData = async (file, content) => {
    try {
        await fs.promises.writeFile(file, content);
    } catch (err) {
        console.log("Write Error", err);
    }
};

const getData = async (file) => {
    try {
        const res = await fs.promises.readFile(file);
        const data = await JSON.parse(res, null, 2);
        return data;
    } catch (err) {
        console.log("Read Error", err);
    }
};

const isIn = (id, array) => {
    return array.some((item) => item.id === id);
};

class Product {
    constructor(title, price, thumbnail) {
        this.title = title,
        this.price = price,
        this.thumbnail = thumbnail;
    }
}

class Container {
    constructor(file) {
        this.file = file;
    }


    //metodo para guardar un producto
    async save(product) {
        const data = await getData(this.file);

        if (!data) {
            const arrayItems = [{ ...product, id: 1 }];
            await writeData(this.file, JSON.stringify(arrayItems, null, 2));
            return console.log("ID: ", 1);
        }
        const id = data.length + 1;
        const arrayItems = [...data, { ...product, id: id }];
        await writeData(this.file, JSON.stringify(arrayItems, null, 2));
        return console.log("ID: ", id);
    }

    //metodo para obtener por ID
    async getById(id) {
        const data = await getData(this.file);

        if (isIn(id, data)) {
            const productFound = data.find((prd) => prd.id === id);
            return console.log(productFound);
        }
        return console.log(null);
    }

    //metodo para obtener todos
    async getAll() {
        const data = await getData(this.file);
        return console.log(data);
    }

    //metodo para elimintar por ID
    async deleteById(id) {
        const data = await getData(this.file);
        if (isIn(id, data)) {
            const productsFiltered = data.filter((prd) => prd.id !== id);
            await writeData(this.file, JSON.stringify(productsFiltered, null, 2));
            return console.log(`El producto ${id} fue eliminado correctamente`);
        }

        return console.log(`El producto ${id} no se pudo encontrar. Ingrese un nuevo ID`);
    }

    //metodo para borrar todo
    async deleteAll() {
        await writeData(this.file, "");

        return console.log("El archivo " + this.file + " fué borrado");
    }
}

const baseDeDatos = new Container("./productos.json");

const producto1 = new Product(
    "Escuadra",
    123.45,
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
);
const producto2 = new Product(
    "Calculadora",
    234.56,
    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
);
const producto3 = new Product(
    "Globo Terráqueo",
    345.67,
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
);
const producto4 = new Product(
    "Placa de video",
    300,
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
);

baseDeDatos.save(producto4);
baseDeDatos.getAll()
baseDeDatos.getById(2);
baseDeDatos.deleteById(2);