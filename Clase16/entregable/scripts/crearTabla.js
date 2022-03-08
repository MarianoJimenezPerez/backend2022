import knex from "knex"
import config from "./../src/config.js"

// Productos en mariadb

try {
    const mariaDBClient = knex(config.mariaDB);

    await mariaDBClient.schema.dropTableIfExists('productos')

    await mariaDBClient.schema.createTable('productos', table => {
        table.increments('id').primary()
        table.string('title', 30).notNullable()
        table.float('price').notNullable()
        table.string('thumbnail', 1024)
    })

    console.log('Tabla de productos creada en mariadb')
} catch ( error ) {
    console.log('Error en la tabla de productos de mariadb')
    console.log(error)
} 

// mensajes en sqlite 3

try {
    const sqlite3Client = knex(config.sqlite3);

    await sqlite3Client.schema.dropTableIfExists('mensajes')

    await sqlite3Client.schema.createTable('mensajes', table => {
        table.increments('id').primary()
        table.string('autor', 50)
        table.string('texto', 1024)
        table.string('fyh', 50)
    })

    console.log('Tabla de mensajes creada en sqlite3')
} catch ( error ) {
    console.log('Error en la tabla de mensajes de sqlite3')
    console.log(error)
}