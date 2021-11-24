const res = require('./restaurants');
const connection = require('./config/mongoConnection');

const main = async () => {
  const rest = await res.create("The Saffron Lounge",
  "New York City, New York",
  "123-456-7890",
  "http://www.saffronlounge.com",
  "$$$$",
   ["Cuban", "Italian" ],
  3,
  {dineIn: true, takeOut: true, delivery: false});
  console.log('Sasha the dog has been added, now she will blog!');
  //console.log(sasha);


  const db = await connection();
  await db.serverConfig.close();

};



main().catch((error) => {
    console.log(error);
  });