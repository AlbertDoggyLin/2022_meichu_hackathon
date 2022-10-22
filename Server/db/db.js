const mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'redacted',
    database:'hackathon',
    port: 3306
});
  
module.exports = conn;