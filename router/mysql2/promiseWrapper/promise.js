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

router.get('/promise/conn2', (req, res, next) => {
  const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'jsman',
  });
  const name = 'devbyul';
  conn
    .then((connection) => {
      const res = connection.execute('select * from user where name = ?', [
        name,
      ]);
      connection.end();
      return res;
    })
    .then(([results, fields, err]) => {
      if (err) throw err;
      res.json(results);
      console.log(err);
    })
    .catch((err) => {
      err.route = '[Error Route] : /promise/conn {GET}';
      next(err);
    });
});

router.post('/promise/conn', (req, res, next) => {
  const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'jsman',
  });
  const { email, name, pw } = req.body;
  conn.then((connection) => {
    connection
      .execute('insert into user(email,name,pw) values(?,?,?)', [
        email,
        name,
        pw,
      ])
      .then(([results, fields, err]) => {
        if (err) throw err;
        connection.query('COMMIT');
        res.json(results);
      })
      .catch((err) => {
        err.route = '[Error Route] : /promise/conn {POST}';
        next(err);
      })
      .finally(() => {
        connection.end();
      });
  });
});

router.get('/promise/pool', (req, res, next) => {
  console.log('/promise/pool');
  const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'jsman',
  });
  const name = 'devbyul';
  pool
    .getConnection()
    .then((connection) => {
      connection
        .execute('select * from user where name = ?', [name])
        .then(([results, fields, err]) => {
          if (err) throw err;
          res.json(results);
        })
        .catch((err) => {
          err.route = '[Error Route] : /promise/pool {GET}';
          next(err);
        })
        .finally(() => {
          connection.release();
        });
    })
    .finally(() => {
      // 해당 pool에 속한 모든 연결 종료
      pool.end();
    });
});

router.get('/promise/pool2', (req, res, next) => {
  console.log('/promise/pool2');
  const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'jsman',
  });
  const name = 'devbyul';
  pool
    .getConnection()
    .then((connection) => {
      const res = connection.execute('select * from user where name = ?', [
        name,
      ]);
      connection.release();
      return res;
    })
    .then(([results, fields, err]) => {
      if (err) throw err;
      res.json(results);
    })
    .catch((err) => {
      err.route = '[Error Route] : /promise/pool2 {GET}';
      next(err);
    })
    .finally(() => {
      // 해당 pool에 속한 모든 연결 종료
      pool.end();
    });
});

module.exports = router;
