const MongoClient = require('mongodb').MongoClient;
const restaurants = require('./data/restaurants')
const connection = require('./config/mongoConnection');

/* const settings = require('./config/settings.json') // to close the db connection
const mongoConfig = settings.mongoConfig; */

const main = async () => {
    let data = []
    /* try{
        let res = await restaurants.rename('615ca86ec9513ec0ce35fc53','http://www.blackbird.com')//check
        console.log(res)
    }catch(e){
        console.log(e)
    } */
    /* try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['indian','Maxican'], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let x = await restaurants.getAll()
        data = x
        console.log(x) 
    }catch(e){
        console.log(e)
    }
    try{
        //let res = await restaurants.rename("61588210fe7d36187d74cebf","http://www.saffronlounge579.com")
        let res = await restaurants.rename(data[0]['_id'],"http://www.black.com")
        console.log(res)
    }catch(e){
        console.log(e)
    } */
/*     try{//check
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], 4.5, {abch: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.lK7_#.com",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{//check
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","hjuihttp://www.blackk.com",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    } */
/*     try{
        let res = await restaurants.remove("615b62a5f4d018b4d14703")
        //let res = await restaurants.rename(data[0]['_id'],"http://www.saffronlounge579.com")
        console.log(res)
    }catch(e){
        console.log(e)
    }

    try{
        let rest1 = await restaurants.create("The Red Lounge","New York City, New York","123-456-7890","http://www.saffronlounge.com",
                                    "$$$$",["Cuban", "Italian" ], 3, {dineIn: true, takeOut: true, delivery: false})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
 */
    try{
        let x = await restaurants.getAll()
        console.log(x) 
    }catch(e){
        console.log(e)
    }
    
    try{
        let rest1 = await restaurants.create("The Red Lounge","New York City, New York","123-456-7890","http://www.saffronlounge.com",
                                    "$$$$",["Cuban", "Italian" ], 3, {dineIn: true, takeOut: true, delivery: false})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The White Lounge","Hoboken, New Jersey","897-456-7890","http://www.whitelounge.com",
                                    "$$$",["Cuban", "Indian" ], 4, {dineIn: true, takeOut: false, delivery: false})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let x = await restaurants.getAll()
        data = x
        console.log(x) 
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","897-098-7890","http://www.blackbird.com",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        //let res = await restaurants.rename("61588210fe7d36187d74cebf","http://www.saffronlounge579.com")
        let res = await restaurants.rename(data[0]['_id'],"http://www.saffronlounge579.com")
        console.log(res)
    }catch(e){
        console.log(e)
    }
    try{
        //let res = await restaurants.remove('615b4bec64ed49d172a449ff')//Get 2nd ID
        let res = await restaurants.remove(data[1]['_id'])//Get 2nd ID
        console.log(res)
    }catch(e){
        console.log(e)
    }
    try{
        let x = await restaurants.getAll()
        console.log(x) 
    }catch(e){
        console.log(e)
    }
    
    // --------------------- Faulty records ---------------------  
    try{
        let rest1 = await restaurants.create(null,"Jersey city, New Jersey","897-098-7890","http://www.blackbird.com",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let res = await restaurants.remove('615ca86ec9513ec0ce35fc53') //check
        console.log(res)
    }catch(e){
        console.log(e)
    }
    try{
        let res = await restaurants.rename('615ca86ec9513ec0ce35fc53','http://www.blackbird.com')//check
        console.log(res)
    }catch(e){
        console.log(e)
    }
    try{
        let res = await restaurants.rename(data[0]['_id'],'http://www.123d.com')//check
        console.log(res)
    }catch(e){
        console.log(e)
    }
    try{
        let getid = await restaurants.get('615ca86ec9513ec0ce35fc53')//Change ID
    }catch(e){
        console.log(e)
    }

    //------------------------------------------------------------------------------
    try{
        let rest1 = await restaurants.create(null,'nj',"897-098-7890","http://www.blackbird",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create('      ','nj',"897-098-7890","http://www.blackbird",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    //location
    try{
        let rest1 = await restaurants.create('xyzplace ','     ',"897-098-7890","http://www.blackbird",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird",123,"897-098-7890","http://www.blackbird",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    //Phone Number
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey",897-098-7890,"http://www.blackbird",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","(123)-345-6789","http://www.blackbird",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-789","http://www.blackbird",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    //Website
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.blackbird.comhjh",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","www.blackbird.com",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{//check
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.hjk_.com",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.lK7_#.com",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{//check
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","hjuihttp://www.blackk.com",
                                    "$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black",
                                    "$$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
/*     try{//not reqd
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://svrsvfs.com",
                                    "$$$$",[], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    } */
    //Pricing
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$$$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$&$$",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    0909,["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "  ",["Maxican", "Indian" ], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    //Cuisines
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",[], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",[1,9], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",[null,90], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['    ','indian'], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",[{},[],90], 4.5, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    //Ratings
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], null, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], '4.5', {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], true, {dineIn: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    //Service Option
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], 4.5, {})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], 4.5, {dineIn: true, takeOut: false})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], 4.5, {dineIn: 123, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{//check
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], 4.5, {abch: true, takeOut: false, delivery: true})
    console.log(rest1)
    }catch(e){
        console.log(e)
    }
    try{
        let rest1 = await restaurants.create("The Black Bird","Jersey city, New Jersey","123-345-6789","http://www.black.com",
                                    "$$",['Indian','Maxican'], 4.5, [])
    console.log(rest1)
    }catch(e){
        console.log(e)
    }



/* const db = await connection()
mongoClient_close = new MongoClient()
mongoClient_close.close(mongoConfig.serverUrl) */

process.exit()


};

main().catch((error) => {
    console.log(error);
  });

