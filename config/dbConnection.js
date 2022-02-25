const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'jsman',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'jsman',
});

module.exports = { pool, connection };
/*
host: 'localhost',
port: '3306',
user: 'root',
password: 'root',
database: 'jsman',
*/
