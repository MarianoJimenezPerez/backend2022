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

const batch = async () => {
    try {
        console.log(`Se eliminó toda la tabla`) //imprimo que háre
        await knex.from('autos').del()

        console.log(`Insertando nueva tabla`) //imprimo que háre
        await knex('autos').insert(listaAutos)

        console.log(`Leyendo tabla`) //imprimo que háre
        let respuesta = await knex.grom('autos').select('*');   // lo guardo en una variable que el await tiene que esperar algo
        console.log(respuesta)
        
    } catch (error) {
        console.error({
            numero: error.errno,   //numero de error que podemos inestigar en la doc de mysql / mariadb
            codigo: error.code,
            msg: error.sqlMessage
        })
    } finally {
        knex.destroy();  // como buena práctica, destruímos la conexión para no saturar el sv
    }
}

batch();  //invoco la variable