// Here in this file, we will define the schema for the Positions model using Mongoose. This schema will outline the structure of the data that will be stored in the MongoDB database for positions, including fields such as name, quantity, price, and any other relevant information.

// We will only get the STocks data from APIs & other data such as holdings, positions, orders, etc, will be stored in our database. This will allow us to have a centralized location for all of our holdings data, making it easier to manage and analyze.

// Here this 'Schema' is a constructor function provided by Mongoose that allows us to define the structure of our data. We will use this to create a new schema for our Holdings model, specifying the fields and their data types, as well as any validation rules or default values that we want to enforce.
const { Schema } = require('mongoose');

// Define the schema for the Positions model
const positionsSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    avg: Number,
    price:{
        type: Number,
        required: true
    },
    net: String,
    day: String,
    isLoss: Boolean,
});


// Now we will export the positionsSchema so that it can be used in other parts of our application. This will allow us to create a Mongoose model based on this schema, which we can then use to interact with the positions data in our MongoDB database.
// here we are using {} way, so that we can export multiple things from this file in the future if needed. This is a common practice in Node.js applications, as it allows for greater flexibility and modularity in our codebase.
module.exports = { positionsSchema };