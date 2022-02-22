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
]

knex.from('autos').select('*').where('id', '=', '1').update({modelo: 'ya no es audi'})  //filtro con el where el id 1 y le cambio el modelo al que yo quiero
    .then(() => {   //recibo los registros
        console.log(`Registro 1 actualizado`) //imprimo que id se modificó
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