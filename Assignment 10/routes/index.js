const userRoutes = require('./users')
const path = require('path')
const constructorMethod = (app) => {
    app.use('/',userRoutes)
    app.use('*', (req,res) => {
        // console.log('Page not found')
        res.sendFile(path.resolve('pagenotfound.html') )
      })
}

module.exports = constructorMethod