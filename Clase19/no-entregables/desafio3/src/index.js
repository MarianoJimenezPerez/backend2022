const mongoose = require('mongoose');
const EstudianteModel = require('./models/Estudiante.modelo');

const URL = 'mongodb://localhost:27017/desafio3';

async function cargarEstudiantes(estudiantes){
    let resultados = [];
    try {
        for(const estudiante of estudiantes){
            let obj = new EstudianteModel(estudiante);
            resultados.push(await obj.save());
        }
    } catch (error) {
        console.error(error)
    }
    return resultados
}
async function actualizarDni(nombre, apellido, dni){
    let estudiante = '';
    try {
        estudiante = await EstudianteModel.find({$and : [{nombre: nombre}, {apellido: apellido}] }).updateOne({$set: {dni: dni}});
    } catch (error) {
        console.error(error)
    }
    return estudiante
}

async function cargarCampoIngreso(valor){
    let resultado = '';
    try {
        resultado = await EstudianteModel.updateMany({}, {$set: {ingreso: valor}})
    } catch (error) {
        console.error(error)
    }
    return resultado
}

mongoose.connect(URL)  //conecto con mongoose de forma asyncrona
    .then(async () => {
        //bloque de acciones para conexión exitosa
        try {
            // aquí meto mi codigo (o CRUD)
            let resultados = [];
            resultados = await EstudianteModel.deleteMany({})  //borro todo por si lo voy iterando
            let estudiantes = [
                { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
                { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
                { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
                { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
                { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
                { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
                { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
                { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
                { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
                { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
            ]
            resultados = await cargarEstudiantes(estudiantes);
            console.log(resultados)  // imprimo el resultado de la db con todos los estudiantes cargados
            
        } catch (error) {
            // aquí manejo mi error
            console.error(`Error: ${error}`);
        }
    })
    .then( async () => {
        try {
            // aquí meto mi codigo (o CRUD)
            let estudianteModificado = await actualizarDni('Lucas', 'Blanco', 20355875);
            console.log(estudianteModificado) // imprimo el resultado de haber modificado el dni del estudiante
        } catch (error) {
            // aquí manejo mi error
            console.error(`Error: ${error}`);
        }
    })
    .then( async () => {
        try {
            // aquí meto mi codigo (o CRUD)
            let cargarCampo = await cargarCampoIngreso('false');
            console.log(cargarCampo)
        } catch (error) {
            // aquí manejo mi error
            console.error(`Error: ${error}`);
        } finally{
            mongoose.disconnect().catch((err) => {
                console.error(err);
            })
        }
    })
    .catch((err) => {
        //bloque de control
        console.error('Error al conectarse a la DB')
    })