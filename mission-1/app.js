const express = require('express');
const dummyData = require('./public/dummyData');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/main.html`);
});
app.post('/ajax_send_search', (req, res) => {
  console.log('express - ajax_send_search');
  console.log('dummyData : ', dummyData);
  const search = req.body.data;
  const data = dummyData.filter((el) => {
    return el.includes(search);
  });

  res.status(200).json({ message: 'ok', data });
});
app.post('/fetch_send_search', (req, res) => {
  console.log('express - fetch_send_search');
  const search = req.body.data;
  const data = dummyData.filter((el) => {
    return el.includes(search);
  });
  res.status(200).json({ message: 'ok', data });
});

app.listen(port, () => {
  console.log('start');
});
