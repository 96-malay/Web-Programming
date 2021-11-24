
const mongoCollections = require ('./config/mongoCollections')
const restaurants = mongoCollections.restaurants;




const create = async function create(name, location, phoneNumber, website, priceRange, 
    cuisines, overallRating, serviceOptions)
{
    const restaurantsCollection = await restaurants();

    let newRestaurant = {
        name: name,
        location: location,
        phoneNumber:phoneNumber,
        website:website, 
        priceRange:priceRange, 
        cuisines:cuisines, 
        overallRating:overallRating,
        serviceOptions:serviceOptions
      };
  
      const insertInfo = await restaurantsCollection.insertOne(newRestaurant);
      if (insertInfo.insertedCount === 0) throw 'Could not add restaurant';


}




module.exports = 
{
    create
    
};