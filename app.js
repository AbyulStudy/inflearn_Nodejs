const express = require('express');
const app = express();
const port = 3000;

// static 디렉토리 경로 지정
app.use(express.static('public'));

app.get('/', function (req, res) {
  console.log('localhost:3000');
  res.sendFile(__dirname + '/public/main.html');
});
app.get('/main', function (req, res) {
  console.log('localhost:3000/main');
  res.sendFile(__dirname + '/public/main.html');
});

app.listen(port, () => {
  console.log('start, express server on port 3000');
});
