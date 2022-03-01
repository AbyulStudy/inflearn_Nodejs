const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

router.get('/promise/conn', (req, res, next) => {
  console.log('/promise/conn');
  const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'jsman',
  });
  const name = 'devbyul';
  conn.then((connection) => {
    connection
      .execute('select * from user where name = ?', [name])
      .then(([results, fields, err]) => {
        if (err) throw err;
        res.json(results);
      })
      .catch((err) => {
        err.route = '[Error Route] : /promise/conn {GET}';
        next(err);
      })
      .finally(() => {
        connection.end();
      });
  });
});

module.exports = router;
