const palindromeRoute = require('./palindrome')
const path = require('path')
const constructorMethod = ( app ) => {
    app.use('/',palindromeRoute);
    app.use('*' , (req,res) => {
        res.sendFile(path.resolve('static/palindrome.html'))
    })
}

module.exports = constructorMethod