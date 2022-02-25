const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// DATABASE SETTING
const connection = (mysql.createConnection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'jsman',
}));

// mysql connection
connection.connect();

router.post('/form', function (req, res) {
  res.render('email.ejs', { email: req.body.email });
});

router.post('/ajax', function (req, res, next) {
  const email = req.body.email;
  let responseData = {};
  // const query = connection.prepare('select name from user where email = ?', (err, statement) => {
  //   statement.execute([email], (err, rows) => {
  //     if (err) throw err;
  //     if (rows[0]) {
  //       responseData.result = 'ok';
  //       responseData.name = rows[0].name;
  //     } else {
  //       console.log('none : ' + rows[0]);
  //       responseData.name = '';
  //     }
  //     res.json(responseData);
  //   });
  // });
  const query = connection.execute('select name from user where email =?', [email], (err, rows) => {
    if (err) throw err;
    if (rows[0]) {
      responseData.result = 'ok';
      responseData.name = rows[0].name;
    } else {
      console.log('none : ' + rows[0]);
      responseData.name = '';
    }
    res.json(responseData);
  });
});

module.exports = router;
