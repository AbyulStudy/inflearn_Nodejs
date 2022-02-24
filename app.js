const express = require('express');
const app = express();
const mysql = require('mysql2');

// mysql connection
const connection = (mysql.createConnection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'jsman',
}));

connection.connect();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.set('views', './views'); // default (__dirname\views)
app.set('view engine', 'ejs');

// routing
app.get('/', function (req, res) {
  console.log('localhost:3000');
  res.sendFile(__dirname + '/public/main.html');
});
app.get('/main', function (req, res) {
  console.log('localhost:3000/main');
  res.sendFile(__dirname + '/public/main.html');
});
app.post('/email_post', function (req, res) {
  console.log('localhost:3000/email_post');
  res.render('email.ejs', { email: req.body.email });
});
app.post('/ajax_send_email', function (req, res) {
  console.log('localhost:3000/ajax_send_email');
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

const port = 3000;

app.listen(port, () => {
  console.log('start, express server on port 3000');
});
