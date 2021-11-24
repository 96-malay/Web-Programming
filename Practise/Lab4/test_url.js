var validUrl = require('valid-url');
let suspect = 'http://www.npmjs.co'
    if (validUrl.isHttpUri(suspect)){
        console.log('Looks like an URI');
    } else {
        console.log('Not a URI');
    }