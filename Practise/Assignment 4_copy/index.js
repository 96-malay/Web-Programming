const MongoClient = require('mongodb').MongoClient;
const restaurants = require('./data/restaurants')
//const connection = require('./config/mongoConnection');
const dbConnection = require('./config/mongoConnection');

/* const settings = require('./config/settings.json')
const mongoConfig = settings.mongoConfig; */

const main = async () => {
    let data = []

    try{
        let rest1 = await restaurants.create("The Red Lounge","New York City, New York","123-456-7890","http://www.saffronlounge.com",
                                    "$$$$",["Cuban", "Italian" ], 3, {dineIn: true, takeOut: true, delivery: false})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }

/* const db = await connection()
mongoClient_close = new MongoClient()
mongoClient_close.close(mongoConfig.serverUrl) */

const arrayIP = await dbConnection();
const connectionDB = arrayIP[1]
connectionDB.close()


};

main().catch((error) => {
    console.log(error);
  });

