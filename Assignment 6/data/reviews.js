const mongoCollections = require("../config/mongoCollections");
// const reviews = mongoCollections.reviews
const restaurants = mongoCollections.restaurants;

const restaurants_obj = require("./restaurants");
let { ObjectId } = require("mongodb");
const { review } = require("."); //Added by system

module.exports = {
  async updateRating(id, newRating, operation) {
    //const restaurantsCollection = await restaurants()
    let restaurant = await restaurants_obj.get(id);
    if (restaurant === null) throw [404, "No restaurant found with given ID"];
    if (operation) {
      let noOfReviews = restaurant["reviews"].length + 1;
      sum = newRating;
      for (let x in restaurant["reviews"]) {
        sum += x["rating"];
      }
      return sum / noOfReviews;
    } else {
      let noOfReviews = restaurant["reviews"].length - 1;
      sum = 0;
      for (let x in restaurant["reviews"]) {
        sum += x["rating"];
      }
      sum -= newRating;
      return sum / noOfReviews;
    }
  },
  validateRestaurantId(restaurantId) {
    if (!restaurantId) throw [400, "Kindly provide restaurant Id"];
    if (typeof restaurantId !== "string")
      throw [400, "Kindly provide restaurant Id in string format"];
    if (restaurantId.replace(/\s/g, "").length === 0)
      throw [400, "Empty Restaurant Id"];

    return restaurantId.trim();
  },
  validateTitle(title) {
    if (!title) throw [400, "Kindly provide title"];
    if (typeof title !== "string")
      throw [400, "Kindly provide title in string format"];
    if (title.replace(/\s/g, "").length === 0) throw [400, "Blank Title"];

    return title.trim();
  },
  validateReviewer(reviewer) {
    if (!reviewer) throw [400, "Kindly provide reviewer"];
    if (typeof reviewer !== "string")
      throw [400, "Kindly provide reviewer in string format"];
    if (reviewer.replace(/\s/g, "").length === 0) throw [400, "Blank reviewer"];

    return reviewer.trim();
  },
  validateRating(rating) {
    if (!rating) throw [400, "Kindly provide rating"];
    if (isNaN(rating) || rating === null || typeof(rating) !== 'number')
      throw [400, "Kindly provide valid number between 1 - to 5 for rating"];
    if (rating < 1 || rating > 5)
      throw [400, "Kindly provide rating between 1 to 5"];

    return rating;
  },
  validateDateOfReview(dateOfReview) {
    if (!dateOfReview) throw [400, "Kindly provide dateOfReview"];
    if (typeof dateOfReview !== "string")
      throw [400, "Kindly provide valid string for date of review "];
    if (dateOfReview.replace(/\s/g, "").length === 0)
      throw [400, "Blank Date of Review"];
    dateOfReview = dateOfReview.trim();
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateOfReview))
      throw [400, "Not a valid date string. Valid Date string is MM/DD/YYYY"];
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    if (dd.length < 2 && dd.length > 0) {
      dd = "0" + dd;
    }
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    if (mm.length < 2 && mm.length > 0) {
      mm = "0" + mm;
    }
    let yyyy = today.getFullYear();
    let currentDate = mm + "/" + dd + "/" + yyyy;

    if (dateOfReview !== currentDate)
      throw [400, "Date of review should be current date"];
    return dateOfReview;
  },
  validateReview(review) {
    if (!review) throw [400, "Kindly provide review"];
    if (typeof review !== "string")
      throw [400, "Kindly provide review as a string input"];
    review = review.trim();
    if (review.replace(/\s/g, "").length === 0)
      throw [400, "Review can not be blank"];

    return review;
  },
  async create(restaurantId, title, reviewer, rating, dateOfReview, review) {
    if (arguments.length !== 6)
      throw [400, "Kindly provide all the parameters"];
    restaurantId = this.validateRestaurantId(restaurantId);
    title = this.validateTitle(title);
    reviewer = this.validateReviewer(reviewer);
    rating = this.validateRating(rating);
    dateOfReview = this.validateDateOfReview(dateOfReview);
    review = this.validateReview(review);
    //Check if id is object id or not
    restaurants_obj.verifyObjectId(restaurantId);
    parsedRestaurantId = ObjectId(restaurantId);
    try {
      const restaurantsCollection = await restaurants();
      let restaurant = await restaurantsCollection.findOne({
        _id: parsedRestaurantId,
      });
      if (restaurant === null) throw [404, "ID Not found"];
      // const reviewsCollection = await reviews();
      let newreview = {
        _id: ObjectId(),
        title,
        reviewer,
        rating,
        dateOfReview,
        review,
      };
      // let insertInfo = await reviewsCollection.insertOne(newreview)
      // if(insertInfo.insertedCount === 0) throw [400,'Can not add a new review']
      // const newId = insertInfo.insertedId
      // //Now update the restaurant by adding review to it

      //New Rating:
      let ratingSum = rating;
      let ratingCount = 1;
      for (let j in restaurant["reviews"]) {
        ratingSum += restaurant["reviews"][j]["rating"];
        ratingCount += 1;
      }
    //   let newRating = parseFloat((ratingSum / ratingCount).toFixed(1), 10);
      let newRating = (ratingSum / ratingCount)
      //let newRating = this.updateRating(restaurantId,rating,true) //true indicates that we are adding the rating
      restaurant["reviews"].push(newreview);
      restaurant["overallRating"] = newRating;
      updateRestaurant = await restaurantsCollection.updateOne(
        { _id: parsedRestaurantId },
        { $set: restaurant }
      );
      if (updateRestaurant.modifiedCount === 0)
        throw [500, "Something went wrong on server side"];

      return await restaurants_obj.get(restaurantId);
    } catch (e) {
      throw e;
    }
  },
  async getAll(restaurantId) {
    restaurantId = this.validateRestaurantId(restaurantId);
    await restaurants_obj.verifyObjectId(restaurantId);
    parsedRestaurantId = ObjectId(restaurantId);
    const restaurantsCollection = await restaurants();
    let info = await restaurantsCollection.findOne(
      { _id: parsedRestaurantId },
      { projection: { _id: 0, reviews: 1 } }
    );
    if (info === null) throw [404, []];
    // info['_id'] = info['_id'].toString()
    for (let review in info["reviews"]) {
      // review['_id'] = ObjectId(review['_id'] ).toString()
      review["_id"] = review["_id"].toString();
    }
    // info = info.projection({'_id':0,'reviews':1})
    return info;
  },
  async get(reviewId) {
    reviewId = this.validateRestaurantId(reviewId);
    await restaurants_obj.verifyObjectId(reviewId);
    parsedReviewId = ObjectId(reviewId);
    // const reviewsCollection = await review()
    const restaurantsCollection = await restaurants();
    let info = await restaurantsCollection.findOne(
      { "reviews._id": parsedReviewId },
      {
        projection: {
          _id: 0,
          "reviews.$": 1,
        },
      }
    );
    if (info === null) throw [404, []]; //`No reviews found for ID: ${reviewId}`
    //Projection Needed?
    info["reviews"][0]["_id"] = info["reviews"][0]["_id"].toString();
    return info["reviews"][0];
  },
  async remove(reviewId) {
    reviewId = this.validateRestaurantId(reviewId);
    await restaurants_obj.verifyObjectId(reviewId);
    parsedReviewId = ObjectId(reviewId);
    // const reviewsCollection = await review()
    const restaurantsCollection = await restaurants();
    let info = await restaurantsCollection.findOne({
      "reviews._id": parsedReviewId,
    });
    if (info === null) throw [404, []]; //`No reviews found for ID: ${reviewId}`]

    //Calculating updated rating
    let ratingSum = 0;
    let ratingCount = 0;
    for (let i in info["reviews"]) {
      if (info["reviews"][i]["_id"].toString() !== reviewId) {
        ratingSum += info["reviews"][i]["rating"];
        ratingCount += 1;
      }
    }

    //Update the overall ratings
    // let newRating = await this.updateRating(info['_id'].toString(),info['reviews._id.rating'],false) //true indicates that we are adding the rating
    let newRating = 0
    if ( ratingCount !== 0 ){
         newRating = (ratingSum / ratingCount)
    }
    
    // let deletedReview = await restaurantsCollection.updateOne({'_id':info['_id']},{$pull: {'reviews._id': parsedReviewId}},
    //                                                                                 {$set: {'overallRating' : newRating}})
    let deletedReview = await restaurantsCollection.updateOne(
      { _id: info["_id"] },
      {
        $pull: { reviews: { _id: parsedReviewId } },
        $set: { overallRating: newRating },
      }
    );
    if (deletedReview.modifiedCount === 0)
      throw [500, `Unable to delete the review with ID: ${reviewId}`];

    // //Update the overall ratings
    // let newRating = this.updateRating(info['_id'].toString(),info['reviews._id.rating'],false) //true indicates that we are adding the rating

    // info['overallRating'] = newRating
    // updateRestaurant = await restaurantsCollection.updateOne({'_id':info['_id']},{$set: {'overallRating' : newRating}})
    // if(updateRestaurant.modifiedCount === 0) throw[500,'Something went wrong on server side while updating the overall rating']

    return { reviewId: reviewId, deleted: true };
  },
};
