
//const mongoCollections = require('../config/mongoCollections') ///config/mongoCollections');
const mongoCollections = require('../config/mongoCollections') ///config/mongoCollections');
const restaurants = mongoCollections.restaurants

let { ObjectId } = require('mongodb');
function validateWebsite(website) {
    let websiteRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{5,}\.com$/   //[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    //Source: https://stackoverflow.com/a/46181
    if(typeof(website) !== 'string') throw 'Kindly Provide string input for Website'
    if( website.replace(/\s/g,'').length === 0 ) throw `website is an empty string`
    if(!websiteRegex.test(website)) throw 'Kindly provide valid Website URL'
    
    
    return true
}
module.exports = {
//async function create(name, location, phoneNumber, website, priceRange, cuisines, overallRating, serviceOptions){
async  create(name, location, phoneNumber, website, priceRange, cuisines, overallRating, serviceOptions){
    if(!name || !location || !phoneNumber || !website || !priceRange || !cuisines || !overallRating || !serviceOptions ) throw 'Kindly provide Valid values for all the properties'
    if(    typeof(name) !== 'string' 
        || typeof(location) !== 'string' 
        || typeof(phoneNumber) !== 'string' 
        || typeof(website) !== 'string' 
        || typeof(priceRange) !== 'string' 
        ) throw 'Kindly provide string input for Name, Location, Phone Number, website, Price Range'
    
    if( name.replace(/\s/g,'').length === 0 ) throw `Name is an empty string`
    if( location.replace(/\s/g,'').length === 0 ) throw `location is an empty string`
    if( phoneNumber.replace(/\s/g,'').length === 0 ) throw `phoneNumber is an empty string`
    if( website.replace(/\s/g,'').length === 0 ) throw `website is an empty string`
    if( priceRange.replace(/\s/g,'').length === 0 ) throw `priceRange is an empty string`

    let phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/  // Google: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    if(!phoneNumberRegex.test(phoneNumber)) throw 'Kindly enter phone number in xxx-xxx-xxxx format'

    /* let websiteRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{5,256}\.com/   //[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    //Source: https://stackoverflow.com/a/46181
    if(!websiteRegex.test(website)) throw 'Kindly provide valid Website URL' */
    validateWebsite(website)

    //let priceRegex = `/\${1,4}/` //Won't work check again
    if( ! (priceRange === '$' || priceRange === '$$' || priceRange === '$$$' || priceRange === '$$$$')) throw 'Kindly put Price Range between $-$$$$'

    if( ! Array.isArray(cuisines) ) throw 'Kindly provide array of cuisines'
    if( cuisines.length === 0 ) throw 'Cuisine list is empty'
    for (let i in cuisines){
        if(typeof(cuisines[i]) !== 'string') throw 'Cuisine values should be in string format'
        if(cuisines[i].replace(/\s/g,'').length === 0 ) throw 'Invalid Cuisine value'
    }

    if(typeof(overallRating) !== 'number' || overallRating === null || overallRating === undefined) throw 'Rating can only be a number'

    if(typeof(serviceOptions) !== 'object') throw 'Service Option is not an object'
    if(Object.keys(serviceOptions).length !== 3) throw 'Kindly provide 3 valid inputs for Service options'
    if(typeof(serviceOptions['dineIn']) !== 'boolean' 
    || typeof(serviceOptions['takeOut']) !== 'boolean' 
    || typeof(serviceOptions['delivery']) !== 'boolean') throw 'Invalid Input of Service Object values'

    for(let y in serviceOptions)
    {
        if( ! (y === 'takeOut' || y === 'dineIn' || y === 'delivery')) throw 'Invalid Service option Key'
    }

    let newRestaurant = {
        name, 
        location, 
        phoneNumber, 
        website, 
        priceRange, 
        cuisines, 
        overallRating, 
        serviceOptions
    }
    const restaurantsCollection = await restaurants();
    let insertInfo = await restaurantsCollection.insertOne(newRestaurant)   //insertOne(newRestaurant)
    if(insertInfo.insertedCount === 0 ) throw 'Coule not add a new Restaurant '

    const newId = insertInfo.insertedId
    let newObjId = ObjectId(newId); //creates a new object ID
    let x = newObjId.toString(); // co
    const Restaurant = await this.get(x)  //newId.id
    Restaurant['_id'] =  Restaurant['_id'].toString()
    return Restaurant

},
//async function get(id) {
async  get(id) {
    if (!id) throw 'Kindly Provide an ID'
    if(typeof(id) !== 'string') throw 'Kindly provide ID in string format'
    if(id.replace(/\s/g,'').length === 0) throw 'ID is Blank String'
    //if(! ObjectId.isValid(id)) throw 'Invalid Object ID'
    try{
        let parsedId = ObjectId(id)
    const restaurantsCollection = await restaurants();
    let info = await restaurantsCollection.findOne({'_id':parsedId})

    if(info === null) throw `No Restaurant with id: ${id}`
    return info
    }catch(e){
        throw 'Invalid Object Id'
    }
    
    
},

//async function getAll() {
async  getAll() {
    const restaurantsCollection = await restaurants()
    let infoList = await restaurantsCollection.find({}).toArray();
    for (let item in infoList){
        infoList[item]['_id'] = ObjectId(infoList[item]['_id'] ).toString()  
    }
    return infoList
},
//async function remove(id) {
async  remove(id) {
    if (!id) throw 'Kindly Provide an ID'
    if(typeof(id) !== 'string') throw 'Kindly provide ID in string format'
    if(id.replace(/\s/g,'').length === 0) throw 'ID is Blank String'
    //if(! ObjectId.isValid(id)) throw 'Invalid Object ID'
    try{
        let parsedId = ObjectId(id)
    const restaurantsCollection = await restaurants();
    let info = await this.get(id)
    let deleteId = await restaurantsCollection.deleteOne({'_id':parsedId})
    if(deleteId.deletedCount === 0) throw `No Restaurant with id: ${id}`
    return `${info['name']} has been successfully deleted!`
    }catch(e){
        throw 'Invalid Object Id'
    }
    

},
//async function rename(id, newWebsite) {
async  rename(id, newWebsite) {
    if (!id) throw 'Kindly Provide an ID'
    if(typeof(id) !== 'string') throw 'Kindly provide ID in string format'
    if(id.replace(/\s/g,'').length === 0) throw 'ID is Blank String'
    //if(! ObjectId.isValid(id)) throw 'Invalid Object ID'
    try{
        let parsedId = ObjectId(id)

    if(! newWebsite) throw 'Kindly provide Website name to update'
    validateWebsite(newWebsite)


    const restaurantsCollection = await restaurants();
    let objInfo = await this.get(id)
    if(objInfo === null) throw `No data for ID: ${id}` //This is most unlikely to execute since get() will handle invalid ID
    if(objInfo['website'] === newWebsite ) throw 'New Website is same as old one'
    objInfo['website'] = newWebsite 
    let updatedObjInfo = await restaurantsCollection.updateOne(
        { _id: parsedId },
        { $set: objInfo }
      );
    if(updatedObjInfo.modifiedCount === 0) throw 'Could not modify the website'

    return objInfo
    }catch(e){
        throw 'Invalid Object Id'
    }
    
}


/*     create,
    get,
    getAll,
    remove,
    rename */
}