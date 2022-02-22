const { options } = require('./utils/options');
const knex = require ('knex')(options);

knex.from('autos').del()  // borro directamente todos los registros
    .then(() => {   //recibo los registros
        console.log(`Registros eliminados`)
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