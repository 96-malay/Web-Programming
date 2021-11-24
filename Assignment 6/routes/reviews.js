const express = require('express');
// const { TopologyType } = require('mongodb');
const { ObjectId } = require('mongodb');
const router = express.Router();
const data = require('../data');
const restaurantsData = data.restaurants;
const reviewsData = data.reviews
const mongoCollections = require('../config/mongoCollections')
const restaurants = mongoCollections.restaurants



router.get('/:id', async (req, res) => {
    
    try {
      if(typeof(req.params.id) !== 'string') throw [400,'Id is not a string']
      if(req.params.id.replace(/\s/g,'').length === 0 ) throw [400,'Blank ID']
      req.params.id = req.params.id.trim()
      restaurantsData.verifyObjectId(req.params.id)
      parsedRestaurantId = ObjectId(req.params.id)
      const restaurant = await restaurantsData.get(req.params.id)
    //   const restaurant = await restaurants.findOne({'_id':parsedRestaurantId},
    //     {projection: {
    //         '_id' : 0,
    //         'reviews.$' : 1 }}
    //     );
        if(restaurant === null) throw [404,`No Restaurant with ID: ${req.params.id}`]
        if(restaurant.length === 0) throw [404,[]]
        if(restaurant['reviews'].length === 0 ) throw [404,[]] //`No reviews found for Restaurant Id: ${req.params.id}`]
      res.json(restaurant['reviews']);
    } catch (e) {
      //res.status(404).json({ message: 'Person not found' });
      res.status(e[0]).json({ message: e[1] });
    }
  });

  router.post('/:id', async (req, res) => {
    try{
        if(typeof(req.params.id) !== 'string') throw [400,'Id is not a string']
        if(req.params.id.replace(/\s/g,'').length === 0 ) throw [400,'Blank ID']
        req.params.id = req.params.id.trim()
        restaurantsData.verifyObjectId(req.params.id)
        const ipRestaurantData = req.body;
        if(Object.keys(ipRestaurantData).length !== 5) throw [400,'Kindly provide correct 5 inputs']
            for (let j in ipRestaurantData){
                if (! (j === 'title'
                    || j === 'reviewer'
                    || j === 'rating'
                    || j === 'dateOfReview'
                    || j === 'review')) throw [400,'Invalid schema']
            }
        const restaurant = await restaurantsData.get(req.params.id)
        if(restaurant === null) throw [404,`No restaurant with Id: ${req.params.id}`]
        title = reviewsData.validateTitle(ipRestaurantData.title)
        reviewer = reviewsData.validateReviewer(ipRestaurantData.reviewer)
        rating = reviewsData.validateRating(ipRestaurantData.rating)
        dateOfReview = reviewsData.validateDateOfReview(ipRestaurantData.dateOfReview)
        review = reviewsData.validateReview(ipRestaurantData.review)

        const createReview = await reviewsData.create(
            req.params.id,
            title,
            reviewer,
            rating,
            dateOfReview,
            review
        )
        res.json(createReview)
    }catch(e){
        res.status(e[0]).json({ message: e[1] });
    }
});

router.get('/review/:id',async (req,res) => {
    try{
        if(typeof(req.params.id) !== 'string') throw [400,'Id is not a string']
        if(req.params.id.replace(/\s/g,'').length === 0 ) throw [400,'Blank ID']
        req.params.id = req.params.id.trim()
        restaurantsData.verifyObjectId(req.params.id)

        const review = await reviewsData.get(req.params.id)
        if(review === null) throw [404,[]]
        res.json(review)
    }catch(e){
        res.status(e[0]).json( {message :  e[1]})
    }
    

});

router.delete('/:id', async(req,res) => {
    try{
        if(typeof(req.params.id) !== 'string') throw [400,'Id is not a string']
        if(req.params.id.replace(/\s/g,'').length === 0 ) throw [400,'Blank ID']
        req.params.id = req.params.id.trim()
        restaurantsData.verifyObjectId(req.params.id)

        const deletedReview = await reviewsData.remove(req.params.id)
        res.json(deletedReview)
    }catch(e){
        res.status(e[0]).json({message : e[1]})
    }
    


})

  module.exports = router 