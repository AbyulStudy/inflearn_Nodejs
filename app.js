const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  res.send('<h1>welcome ' + req.body.email + '!</h1>');
});
app.listen(port, () => {
  console.log('start, express server on port 3000');
});
