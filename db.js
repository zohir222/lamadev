const mysql = require('mysql') ;

export const db = mysql.createConnection({
    host : "localhost" ,
    password : "Zokokoyty1986" ,
    user : "root" ,
    database : "lamadevedb"
})