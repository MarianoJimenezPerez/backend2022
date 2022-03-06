export default {
    sqlite3: {
        client: 'better-sqlite3',
        connection: {
            filename: "./../DB/ecommerce.db3"
        },
        useNullAsDefault: true
    },
    mariaDB: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'ecommerce'
        }
    }
}   