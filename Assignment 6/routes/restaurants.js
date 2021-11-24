const express = require('express');
const { TopologyType } = require('mongodb');
const { ObjectId } = require('mongodb');
const router = express.Router();
const data = require('../data');
const restaurantsData = data.restaurants;

function verifyName(name){
    if (!name) throw [400,'Kindly provide Name']
    if(typeof(name) !== 'string') throw[400,'kindly provide name in string format']
    if(name.replace(/\s/g,'').length === 0) throw [400,'Name is blank']
    return name.trim()
}
function verifyLocation(location){
    if (!location) throw [400,'Kindly provide Location']
    if(typeof(location) !== 'string') throw[400,'kindly provide location in string format']
    if(location.replace(/\s/g,'').length === 0) throw [400,'Location is blank']
    return location.trim()
}
function verifyPhoneNo(phonenumber){
    if (!phonenumber) throw [400,'Kindly provide phone number']
    if(typeof(phonenumber) !== 'string') throw[400,'kindly provide phone number in string format']
    if(phonenumber.replace(/\s/g,'').length === 0) throw [400,'Phone number is blank']
    phonenumber = phonenumber.trim()
    let phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/  // Google: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    if(!phoneNumberRegex.test(phonenumber)) throw [400,'Kindly enter phone number in xxx-xxx-xxxx format']
    return phonenumber
}
function verifyWebsite(website){
    if (!website) throw [400,'Kindly provide website']
    if(typeof(website) !== 'string') throw[400,'kindly provide website in string format']
    if(website.replace(/\s/g,'').length === 0) throw [400,'website is blank']
    website = website.trim()
    let websiteRegex = /^https?:\/\/(www\.){1}[-a-zA-Z0-9@:%_\+~#=]{5,}\.com$/i 
    if(!websiteRegex.test(website)) throw [400,'Kindly enter website in valid format']
    return website
}
function verifyPriceRange(pricerange){
    if (!pricerange) throw [400,'Kindly provide pricerange']
    if(typeof(pricerange) !== 'string') throw[400,'kindly provide pricerange in string format']
    if(pricerange.replace(/\s/g,'').length === 0) throw [400,'pricerange is blank']
    pricerange = pricerange.trim()
    let priceRangeRegex = /^['$']{1,4}$/
    if(!priceRangeRegex.test(pricerange)) throw [400,'Kindly enter pricerange in between $ and $$$$']
    return pricerange
}
function verifyCuisines(cuisines){
    if(! Array.isArray(cuisines)) throw [400,'Kindly provide valid list of cuisines']
    if(cuisines.length === 0) throw [400,'Cuisine list is empty']
    for (dish in cuisines){
        if(typeof(dish) !== 'string') throw[400,'Kindly provide cuisines in string format']
        if(dish.length === 0 ) throw [400, 'Empty cuisine name']

        dish = dish.trim()
    }
    return cuisines
}
function verifyServiceOptions(serviceoption){
    if(typeof(serviceoption) !== 'object') throw [400,'Service Option is not an object']
    if(Object.keys(serviceoption).length !== 3) throw [400,'Kindly provide 3 valid inputs for Service options']
    for(let y in serviceoption)
    {
        if( ! (y === 'takeOut' || y === 'dineIn' || y === 'delivery')) throw [400,'Invalid Service option Key']
        y = y.trim()
    }
    if(typeof(serviceoption['dineIn']) !== 'boolean' 
    || typeof(serviceoption['takeOut']) !== 'boolean' 
    || typeof(serviceoption['delivery']) !== 'boolean') throw [400,'Invalid Input of Service Object values']
    return serviceoption

}
router.get('/:id', async (req, res) => {
    
  try {
    if(typeof(req.params.id) !== 'string') throw [400,'Id is not a string']
    if(req.params.id.replace(/\s/g,'').length === 0 ) throw [400,'Blank ID']
    req.params.id = req.params.id.trim()
    restaurantsData.verifyObjectId(req.params.id)
    const restaurants = await restaurantsData.get(req.params.id);
    res.json(restaurants);
  } catch (e) {
    //res.status(404).json({ message: 'Person not found' });
    res.status(e[0]).json({ message: e[1] });
  }
});
router.get('/', async (req, res) => {
    try {
      const restaurants = await restaurantsData.getAll();
      res.json(restaurants);
    } catch (e) {
      res.status(e[0]).json({ message: e[1] });
    }
  });
router.post('/', async (req, res) => {
    try{
    const ipRestaurantData = req.body;
    if(Object.keys(ipRestaurantData).length !== 7) throw [400,'Kindly provide all the inputs']
    const name = verifyName(ipRestaurantData.name)
    const location = verifyLocation(ipRestaurantData.location)
    const phoneNumber = verifyPhoneNo(ipRestaurantData.phoneNumber)
    const website = verifyWebsite(ipRestaurantData.website)
    const priceRange = verifyPriceRange(ipRestaurantData.priceRange)
    const cuisines = verifyCuisines(ipRestaurantData.cuisines)
    const serviceOptions = verifyServiceOptions(ipRestaurantData.serviceOptions)
    
    for (let j in ipRestaurantData){
        if(! (j === 'name'
            || j === 'location'
            || j === 'phoneNumber'
            || j === 'website'
            || j === 'priceRange'
            || j === 'cuisines'
            || j === 'serviceOptions')) throw [400,'Invalid schema']
    }
        const restaurants = await restaurantsData.create(
            name,
            location,
            phoneNumber,
            website,
            priceRange,
            cuisines,
            serviceOptions
        )
        res.json(restaurants)
    }catch(e){
        res.status(e[0]).json({ message: e[1] });
    }
});

router.put('/:id', async (req,res) => {
    

    try{
        const ipRestaurantData = req.body;
        if(Object.keys(ipRestaurantData).length !== 7) throw [400,'Kindly provide all the inputs']
        const name = verifyName(ipRestaurantData.name)
        const location = verifyLocation(ipRestaurantData.location)
        const phoneNumber = verifyPhoneNo(ipRestaurantData.phoneNumber)
        const website = verifyWebsite(ipRestaurantData.website)
        const priceRange = verifyPriceRange(ipRestaurantData.priceRange)
        const cuisines = verifyCuisines(ipRestaurantData.cuisines)
        const serviceOptions = verifyServiceOptions(ipRestaurantData.serviceOptions)
        restaurantsData.verifyObjectId(req.params.id)

        const restaurants = await restaurantsData.update(
            req.params.id,
            name,
            location,
            phoneNumber,
            website,
            priceRange,
            cuisines,
            serviceOptions
        )
        res.json(restaurants)
    }catch(e){
        res.status(e[0]).json({ message: e[1] });
    }

})
router.delete('/:id', async(req,res) => {
    
    try{
        if(typeof(req.params.id) !== 'string') throw [400,'Provide id in string format']
    if(req.params.id.replace(/\s/g,'').length === 0 ) throw [400,'Blank ID']
    req.params.id = req.params.id.trim()
    restaurantsData.verifyObjectId(req.params.id)
        const restaurant = await restaurantsData.get(req.params.id)
        deletedRestaurant = await restaurantsData.remove(req.params.id)
        res.json(deletedRestaurant)
    }catch(e){
        res.status(e[0]).json({ message: e[1] });
    }
    
    
})

  module.exports = router;