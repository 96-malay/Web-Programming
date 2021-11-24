const palindromeRoutes = require('./palindrome');
const path = require('path')
const constructorMethod = (app) => {
  app.use('/', palindromeRoutes);

  // app.use('*', (req, res) => {
  //   res.redirect('/palindrome/palindromeHandle');
  // });
  app.use('*', (req,res) => {
    res.sendFile(path.resolve('pagenotfound.html') )
  })
};

module.exports = constructorMethod;