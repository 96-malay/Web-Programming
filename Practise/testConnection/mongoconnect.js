const MongoClient = require('mongodb').MongoClient;
const settings = require('./settings');
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

    async function test (){
        if (!_connection) {
            _connection = await MongoClient.connect(mongoConfig.serverUrl, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });
            _db = await _connection.db(mongoConfig.database);
          }
          if(_connection){
              console.log('connection is on. Now turning off')
              _connection.close()
          }
          //return _db;
    }
  
test()
console.log('Hii')