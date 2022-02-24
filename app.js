const express = require('express');
const app = express();
const port = 3000;

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
  console.log('req.body : ', req.body);
  const responseData = { result: 'ok', email: req.body.email };
  res.json(responseData);
});
app.listen(port, () => {
  console.log('start, express server on port 3000');
});
