const mongoCollections = require("../config/mongoCollections");
const restaurants = mongoCollections.restaurants;
let { ObjectId } = require("mongodb");

function validateWebsite(website) {
  //let websiteRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{5,}\.com$/   //[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  let websiteRegex = /^https?:\/\/(www\.){1}[-a-zA-Z0-9@:%_\+~#=]{5,}\.com$/i; //[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  //Source: https://stackoverflow.com/a/46181
  if (typeof website !== "string")
    throw [400, "Kindly Provide string input for Website"];
  if (website.replace(/\s/g, "").length === 0)
    throw [400, `website is an empty string`];
  if (!websiteRegex.test(website))
    throw [400, "Kindly provide valid Website URL"];

  return true;
}
module.exports = {
  verifyObjectId(id) {
    id = id.trim();
    objectIdRegex = /^[a-f\d]{24}$/i;
    if (!objectIdRegex.test(id) || !ObjectId.isValid(id))
      throw [400, "Invalid ObjectID"];
    return; //id
  },
  async create(
    name,
    location,
    phoneNumber,
    website,
    priceRange,
    cuisines,
    serviceOptions
  ) {
    if (arguments.length !== 7) throw [400, "Kindly pass all the parameters"];
    if (
      typeof name !== "string" ||
      typeof location !== "string" ||
      typeof phoneNumber !== "string" ||
      typeof website !== "string" ||
      typeof priceRange !== "string"
    )
      throw [
        400,
        "Kindly provide string input for Name, Location, Phone Number, website, Price Range",
      ];

    if (name.replace(/\s/g, "").length === 0)
      throw [400, `Name is an empty string`];
    if (location.replace(/\s/g, "").length === 0)
      throw [400, `location is an empty string`];
    if (phoneNumber.replace(/\s/g, "").length === 0)
      throw [400, `phoneNumber is an empty string`];
    if (website.replace(/\s/g, "").length === 0)
      throw [400, `website is an empty string`];
    if (priceRange.replace(/\s/g, "").length === 0)
      throw [400, `priceRange is an empty string`];

    name = name.trim();
    location = location.trim();
    phoneNumber = phoneNumber.trim();
    website = website.trim();
    priceRange = priceRange.trim();

    let phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/; // Google: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    if (!phoneNumberRegex.test(phoneNumber))
      throw [400, "Kindly enter phone number in xxx-xxx-xxxx format"];

    validateWebsite(website);

    let priceRangeRegex = /^[$]{1,4}$/;
    if (!priceRangeRegex.test(priceRange))
      throw [400, "Not a valid Price range"];

    if (!Array.isArray(cuisines))
      throw [400, "Kindly provide array of cuisines"];
    if (cuisines.length === 0) throw [400, "Cuisine list is empty"];
    for (let i in cuisines) {
      if (typeof cuisines[i] !== "string")
        throw [400, "Cuisine values should be in string format"];
      if (cuisines[i].replace(/\s/g, "").length === 0)
        throw [400, "Invalid Cuisine value"];
      cuisines[i] = cuisines[i].trim();
    }

    if (typeof serviceOptions !== "object")
      throw [400, "Service Option is not an object"];
    if (Object.keys(serviceOptions).length !== 3)
      throw [400, "Kindly provide 3 valid inputs for Service options"];
    for (let y in serviceOptions) {
      if (!(y === "takeOut" || y === "dineIn" || y === "delivery"))
        throw [400, "Invalid Service option Key"];
    }
    if (
      typeof serviceOptions["dineIn"] !== "boolean" ||
      typeof serviceOptions["takeOut"] !== "boolean" ||
      typeof serviceOptions["delivery"] !== "boolean"
    )
      throw [400, "Invalid Input of Service Object values"];

    let newRestaurant = {
      name,
      location,
      phoneNumber,
      website,
      priceRange,
      cuisines,
      overallRating: 0,
      serviceOptions,
      reviews: [],
    };
    const restaurantsCollection = await restaurants();
    let insertInfo = await restaurantsCollection.insertOne(newRestaurant);
    if (insertInfo.insertedCount === 0)
      throw [500, "Can not add a new restaurant"];
    const newId = insertInfo.insertedId;
    //let newObjId = ObjectId(newId); //creates a new object ID
    //console.log(newId)
    //let x = newId.toString(); // co

    return await this.get(ObjectId(newId).toString());
  },
  async getAll() {
    const restaurantsCollection = await restaurants();
    let infoList = await restaurantsCollection
      .find({}, { projection: { _id: 1, name: 1 } })
      .toArray();
    if (infoList.length === 0) throw [404, []]; //Check

    // for (let item in infoList){
    //     infoList[item]['_id'] = ObjectId(infoList[item]['_id'] ).toString()
    // }
    return infoList;
  },
  async get(id) {
    if (typeof id !== "string") throw [400, "Input is not a string"];
    if (id.replace(/\s/g, "").length === 0)
      throw [400, "Input is a black string"];
    id = id.trim();
    await this.verifyObjectId(id);
    let parsedId = ObjectId(id);
    const restaurantsCollection = await restaurants();
    let info = await restaurantsCollection.findOne({ _id: parsedId });
    if (info === null) throw [404, "ID Not found"];
    // info['id'] = ObjectId.toString(info['id'])
    info["_id"] = info["_id"].toString();
    for (let j of info["reviews"]) {
      j["_id"] = j["_id"].toString();
    }

    return info;
  },
  async remove(id) {
    if (typeof id !== "string")
      throw [400, "Kindly provide valid id in string format"];
    id = id.trim();
    if (id.length === 0)
      throw [400, "Kindly provide valid ID. Entered ID is blank"];
    await this.verifyObjectId(id);

    let parsedId = ObjectId(id);
    const restaurantsCollection = await restaurants();
    let info = await restaurantsCollection.findOne({ _id: parsedId });
    if (info === null) throw [404, `No Restaurant with id: ${id}`];

    let deleteId = await restaurantsCollection.deleteOne({ _id: parsedId });
    if (deleteId.deletedCount === 0)
      throw [500, `Unable to delete Restaurant with id: ${id}`];

    // return `${info['name']} has been successfully deleted!`
    return { restaurantId: id, deleted: true };
  },
  async update(
    id,
    name,
    location,
    phoneNumber,
    website,
    priceRange,
    cuisines,
    serviceOptions
  ) {
    if (arguments.length !== 8) throw [400, "Kindly pass all the parameters"];
    if (
      typeof id !== "string" ||
      typeof name !== "string" ||
      typeof location !== "string" ||
      typeof phoneNumber !== "string" ||
      typeof website !== "string" ||
      typeof priceRange !== "string"
    )
      throw [
        400,
        "Kindly provide string input for Id,Name, Location, Phone Number, website, Price Range",
      ];

    if (id.replace(/\s/g, "").length === 0)
      throw [400, "ID is an empty string"];
    if (name.replace(/\s/g, "").length === 0)
      throw [400, `Name is an empty string`];
    if (location.replace(/\s/g, "").length === 0)
      throw [400, `location is an empty string`];
    if (phoneNumber.replace(/\s/g, "").length === 0)
      throw [400, `phoneNumber is an empty string`];
    if (website.replace(/\s/g, "").length === 0)
      throw [400, `website is an empty string`];
    if (priceRange.replace(/\s/g, "").length === 0)
      throw [400, `priceRange is an empty string`];

    id = id.trim();
    name = name.trim();
    location = location.trim();
    phoneNumber = phoneNumber.trim();
    website = website.trim();
    priceRange = priceRange.trim();

    await this.verifyObjectId(id);

    let phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/; // Google: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    if (!phoneNumberRegex.test(phoneNumber))
      throw [400, "Kindly enter phone number in xxx-xxx-xxxx format"];

    validateWebsite(website);

    let priceRangeRegex = /^[$]{1,4}$/;
    if (!priceRangeRegex.test(priceRange))
      throw [400, "Not a valid Price range"];

    if (!Array.isArray(cuisines))
      throw [400, "Kindly provide array of cuisines"];
    if (cuisines.length === 0) throw [400, "Cuisine list is empty"];
    for (let i in cuisines) {
      if (typeof cuisines[i] !== "string")
        throw [400, "Cuisine values should be in string format"];
      if (cuisines[i].replace(/\s/g, "").length === 0)
        throw [400, "Invalid Cuisine value"];
      cuisines[i] = cuisines[i].trim();
    }

    if (typeof serviceOptions !== "object")
      throw [400, "Service Option is not an object"];
    if (Object.keys(serviceOptions).length !== 3)
      throw [400, "Kindly provide 3 valid inputs for Service options"];
    for (let y in serviceOptions) {
      if (!(y === "takeOut" || y === "dineIn" || y === "delivery"))
        throw [400, "Invalid Service option Key"];
    }
    if (
      typeof serviceOptions["dineIn"] !== "boolean" ||
      typeof serviceOptions["takeOut"] !== "boolean" ||
      typeof serviceOptions["delivery"] !== "boolean"
    )
      throw [400, "Invalid Input of Service Object values"];

    const restaurantsCollection = await restaurants();
    let parsedId = ObjectId(id);
    let tmpRes = await restaurantsCollection.findOne({ _id: parsedId });
    if (tmpRes === null) throw [404, "ID Not found"];
    let updatedRestaurant = {
      name,
      location,
      phoneNumber,
      website,
      priceRange,
      cuisines,
      overallRating: tmpRes["overallRating"],
      serviceOptions,
      reviews: tmpRes["reviews"],
    };
    let updatedData = await restaurantsCollection.updateOne(
      { _id: parsedId },
      { $set: updatedRestaurant }
    );
    if (updatedData.modifiedCount === 0)
      throw [500, `Unable to update the restaurant with ID: ${id}`];
    return await this.get(id);
  },
};
