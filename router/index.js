const express = require('express');
const router = express.Router();
const path = require('path');
const main = require('./main/main');
const email = require('./email/email');
const error = require('./error/error');
const join = require('./join/index');
const promise = require('./mysql2/promiseWrapper/promise');
const asyncAwait = require('./mysql2/promiseWrapper/asyncAwait');

// url routing
router.get('/', function (req, res, next) {
  console.log('127.0.0.1:3000');
  res.sendFile(path.join(__dirname, '../public/main.html'));
});

router.use('/main', main);
router.use('/email', email);
router.use('/error', error);
router.use('/join', join);
router.use('/mysql2', promise);
router.use('/mysql2', asyncAwait);

module.exports = router;
