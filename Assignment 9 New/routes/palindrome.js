const express = require('express');
const router = express.Router();
// const data = require('../data');
// const calculator = data.calculator;

router.get('/', (req, res) => {
  res.render('palindrome/palindromeHandle', {});
});

module.exports = router;