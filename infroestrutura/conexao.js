const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: "root",
    password:"hoot",
    database:'agenda-petshop2'
})

module.exports = conexao;