const express = require('express');
const router = express.Router();
const path = require('path')
// const htmlFile = require('../static/palindrome.html')
// __dirname = require('../static')
router.get('/', (req,res) => {
    // res.sendFile(__dirname + '/palindrome.html')
    res.sendFile(path.resolve('static/palindrome.html'))
})


module.exports = router
