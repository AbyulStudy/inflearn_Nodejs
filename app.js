const express = require('express');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.set('views', './views'); // default (__dirname\views)
app.set('view engine', 'ejs');

// routing
const router = require('./router/index');

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log('start, express server on port 3000');
});
