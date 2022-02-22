const { options } = require('./utils/options');
const knex = require ('knex')(options);

knex.from('autos').select('*').where('marca', '=', 'audi')  //envío con el método where, algún requisito de búsqueda. También se puede enviar un objeto, o clave valor. Revisar documentación
    .then((rows) => {   //recibo los registros
        for ( const row of rows) {
            console.log(`${row['id']}, ${row['marca']}, ${row['modelo']}`) // imprimo id, marca y modelo de toda la tabla autos
        }
        console.table(rows) //tambien puedo imprimirlo con este método directamente
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