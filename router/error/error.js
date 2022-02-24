const express = require('express');
const router = express.Router();
const path = require('path');
// url routing
router.get('/500', function (req, res, next) {
  console.log('127.0.0.1:3000');
  res.sendFile(path.join(__dirname, '/public/main.html'), (err) => {
    if (err) next(err);
  });
});

module.exports = router;
