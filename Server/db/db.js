const mysql = require('mysql2')

var conn = mysql.createConnection({
    host: 'please fill',
    user: 'root',
    password: 'please fill',
    database:'hackathon',
    port: 3306
});
  
module.exports = conn;