const { options } = require('./utils/options');
const knex = require ('knex')(options);

const listaAutos = [
    {
        marca: 'audi',
        modelo: 'a4'
    },
    {
        marca: 'honda',
        modelo: 'city'
    }
];

knex('autos').insert(listaAutos) // envío a mi tabla la lista de autos, con el método insert
    .then(() => {
        console.log("Se agregaron autos")
    })
    .catch((error) => {
        console.error({
            numero: error.errno,   //numero de error que podemos inestigar en la doc de mysql / mariadb
            codigo: error.code,
            msg: error.sqlMessage
        })
    })
    .finally(() => {
        knex.destroy();  // como buena práctica, destruímos la conexión para no saturar el sv
    });