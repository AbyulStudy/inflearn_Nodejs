const express = require('express');
const path = require('path');
const router = express.Router();
const { connection } = require('../../config/dbConnection');

// mysql connection
connection.connect();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/join.html'));
});

router.post('/', (req, res, next) => {
  const body = req.body;
  const email = body.email;
  const name = body.name;
  const password = body.password;
  console.log(body);

  const query = connection.execute('insert into user(email,name,pw) values(?,?,?)', [email, name, password], (err, rows) => {
    if (err) {
      err.route = '[Error Route] : /join {POST}';
      next(err);
    } else {
      console.log('===================================');
      console.log('     user info insert success');
      console.log('===================================');
      console.log('[SUCCESS] DB INSERT DATA : ', rows.insertId, name);
      res.render('welcome.ejs', { name: name, id: rows.insertId });
    }
  });
});
module.exports = router;
