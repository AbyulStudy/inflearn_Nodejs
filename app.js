const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/main.html');
});

app.listen(port, () => {
  console.log('start, express server on port 3000');
});
