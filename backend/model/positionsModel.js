// Here in this file, we will define the model for the Positions using Mongoose. This model will allow us to interact with the positions data in our MongoDB database, including creating, reading, updating, and deleting records.

// Here we need the schema that we defined in the PositionsSchema.js file, so we will import it here. This will allow us to create a Mongoose model based on the positionsSchema, which we can then use to interact with the positions data in our database.
const mongoose = require('mongoose');

const { ordersSchema } = require('../schemas/.js');

// We generally take the name of model same as the name of the collection
const PositionsModel = mongoose.model("Position", positionsSchema);


// Now we will export the PositionsModel so that it can be used in other parts of our application. This will allow us to interact with the positions data in our MongoDB database using this model, including creating, reading, updating, and deleting records.
module.exports = { PositionsModel };

