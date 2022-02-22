const { options } = require('./utils/options');
const knex = require ('knex')(options);

knex.schema.createTable('autos', table => {   //creamos una nueva tabla de nombre autos
    table.increments('id'); // campo incremental para el id
    table.string('marca', 25).notNullable(); // un campo string para marca que no puede ser null
    table.string('modelo', 25).notNullable(); // un campo string para modelo que no puede ser null
})
    .then(() => {                    // lo tratamos como una promesa, ¿Qué ejecutaremos cuando se cree la tabla?
        console.log('tabla creada')
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