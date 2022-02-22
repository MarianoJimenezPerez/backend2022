const options = {
    client: 'mysql',      //tipo de cliente
    connection: {
        host: 'localhost',    //donde hosteamos
        user: 'root',
        password: '',
        database: 'testknex'   //nombre de la db
    }
}

module.exports = {
    options
}