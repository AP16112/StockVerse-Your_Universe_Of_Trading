// Here in this file, we will define the model for the Orders using Mongoose. This model will allow us to interact with the orders data in our MongoDB database, including creating, reading, updating, and deleting records.

// Here we need the schema that we defined in the OrdersSchema.js file, so we will import it here. This will allow us to create a Mongoose model based on the ordersSchema, which we can then use to interact with the orders data in our database.
const mongoose = require('mongoose');

const { ordersSchema } = require('../schemas/ordersSchema.js');

// We generally take the name of model same as the name of the collection
const OrdersModel = mongoose.model("Order", ordersSchema);

// here this "Order" in mongoose.model("Order", ordersSchema) is actually the name of the collection
// Generally we starts the name of collection with capital letters

// SO now when to run this index.js now, mongoDB will create a collection called as 'orders' as we pass "Order" as collection here
// So similarly if we pass 'Product' here, then collection created will be 'products'
// And if we pass 'Employee' here, then collection created will be 'employees'

// SO that's why it's important to carefully select this name & we should not pass some plural name as inside mongoDB, it automatically gets converted to plural to be set as collection name

// it will create the 'employees' as collection
// const Employee = mongoose.model("Employee", userSchema);


// Now we will export the OrdersModel so that it can be used in other parts of our application. This will allow us to interact with the orders data in our MongoDB database using this model, including creating, reading, updating, and deleting records.
module.exports = { OrdersModel };

