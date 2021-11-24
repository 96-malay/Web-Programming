
const path = require('path');
const marvel_characters = require('./marvel_characters');

const constructorMethod = (app) => {
    app.use('/',marvel_characters)
    app.get('*', (req,res) => {
        res.sendFile(path.resolve('static/page-not-found.html'))
    })
}

module.exports = constructorMethod