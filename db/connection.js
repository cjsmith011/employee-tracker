const mysql = require('mysql2');

//this will connect to mysql2
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Bootcamp2022SQL',
        database: 'employees'
    },
    console.log('Connected to the database Employees for tracking')
);

module.exports = db;