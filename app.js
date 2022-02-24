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

// error (404, 500)
app.use((req, res, next) => {
  res.status(404).send('Sorry cant find taht!');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 3000;

app.listen(port, () => {
  console.log('start, express server on port 3000');
});
