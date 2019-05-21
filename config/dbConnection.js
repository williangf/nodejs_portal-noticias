var mysql = require('mysql');

var conn = function () {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'estudo'
    });
}

module.exports = function () {

    return conn;

}



