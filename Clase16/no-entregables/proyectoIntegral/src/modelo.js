const knexLib = require ('knex');

class Modelo {

    constructor(options) {
        this.knex = knexLib(options)
    }

    crearTabla() {
        return this.knex.schema.dropTableIfExists('articulos') // elimina la tabla si existe
            .finally(() => {
                return this.knex.schema.createTable('articulos', table => {
                    table.increments('id').primary();   // crea campo id autoincremental primario
                    table.string('nombre', 15).notNullable(); // crea campo nombre hasta 15 caracteres no nuleable
                    table.string('codigo', 10).notNullable();// crea campo nombre hasta 10 caracteres no nuleable
                    table.float('precio'); // crea campo flotante precio
                    table.integer('stock'); // crea campo entero stock
                })
            })
    }

    insertar(articulos) {
        return this.knex('articulos').insert(articulos);
    }

    cerrarConexion() {
        this.knex.destroy();
    }
}

module.exports = Modelo;