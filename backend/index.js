// Here in this index.js, we will write the main backend server code.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// StockVerse : "Your Universe of Trading"

// A modern MERN‑powered platform where investing meets simplicity, giving you the tools to explore, trade, and grow in one seamless ecosystem.
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Here we firstly need to initialize :- npm init -
// It is to create a package.json file in our project folder. 

// Then we need to install all the other required dependencies like :- 
// npm install -D nodemon
// npm install express 
// npm install ejs
// npm install mongoose              // It is a package which is used to connect our backend server with MongoDB database. It will help us to perform CRUD operations on our MongoDB database. It will help us to create, read, update and delete the data from our MongoDB database. It will help us to define the schema for our data and also it will help us to validate the data before saving it to the database. It will help us to create models for our data and also it will help us to perform queries on our data. It will help us to create relationships between different collections in our database. It will help us to create indexes on our data for faster queries. It will help us to create middleware for our data for pre and post processing of data. It will help us to create virtuals for our data for computed properties. It will help us to create plugins for our data for reusable functionality. It will help us to create transactions for our data for atomic operations. It will help us to create aggregation pipelines for our data for complex queries. It will help us to create population for our data for referencing other documents in our collections.
// npm install body-parser           // it will be used to parse the incoming request bodies in a middleware before your handlers, available under the req.body property. It will help us to extract the data from the request body and make it available in the req.body object. It will help us to handle the incoming data from the client side and process it on the server side.

// npm install cors                // it will be used to enable Cross-Origin Resource Sharing (CORS) in our Express application. It will help us to allow or restrict the resources on our server to be requested from another domain outside the domain from which the resource originated. It will help us to handle the cross-origin requests and responses in our application.
// As our React application is in different folder or URL and our backend server is in different folder or URL, so when we make a request from our React application to our backend server, it will be considered as a cross-origin request. So we need to enable CORS in our backend server to allow the requests from our React application.
// SO cors is used to establish connections between different domains or ports. It is a security feature implemented by web browsers to prevent malicious websites from making requests to a different domain without the user's consent. It allows us to specify which domains are allowed to access our server's resources and which HTTP methods are permitted for those requests. It helps us to control the access to our server's resources and protect our application from potential security risks.

// npm install dotenv                 // it will be used to load environment variables from a .env file into process.env. It will help us to manage the configuration settings of our application in a separate file and keep them secure. It will help us to access the environment variables in our application and use them for different purposes like database connection, API keys, etc.

// npm install passport         // it is a package which is used to authenticate the users in our application. It will help us to implement different authentication strategies like local, OAuth, JWT, etc. It will help us to handle the user authentication and authorization in our application. It will help us to manage the user sessions and protect the routes in our application. It will help us to implement the login and registration functionality in our application. It will help us to secure the user data and prevent unauthorized access to our application. It will help us to integrate with third-party authentication providers like Google, Facebook, Twitter, etc. It will help us to implement social login functionality in our application. It will help us to manage the user roles and permissions in our application. It will help us to implement two-factor authentication in our application. It will help us to handle password reset and account recovery functionality in our application.
// npm install passport-local       // it is a package which is used to implement the local authentication strategy in our application. It will help us to authenticate the users using their username and password. It will help us to handle the user login and registration functionality in our application. It will help us to manage the user sessions and protect the routes in our application. It will help us to secure the user data and prevent unauthorized access to our application. It will help us to implement password hashing and salting for secure storage of user passwords. It will help us to handle password reset and account recovery functionality in our application. It will help us to implement two-factor authentication in our application.
// npm install passport-local-mongoose   // it is a package which is used to simplify the integration of Passport.js with Mongoose. It will help us to implement the local authentication strategy in our application using Mongoose models. It will help us to handle the user login and registration functionality in our application using Mongoose models. It will help us to manage the user sessions and protect the routes in our application using Mongoose models. It will help us to secure the user data and prevent unauthorized access to our application using Mongoose models. It will help us to implement password hashing and salting for secure storage of user passwords using Mongoose models. It will help us to handle password reset and account recovery functionality in our application using Mongoose models. It will help us to implement two-factor authentication in our application using Mongoose models.






// SO here we will use 'nodemon' to run our backend server. It is a utility that will monitor for any changes in our source code and automatically restart the server. It will help us to avoid the need to manually stop and restart the server every time we make changes to our code. So it will help us to save time & also it will make our development process more efficient.
// So here in packgae.json file, we will add a script to run our backend server using nodemon i.e we added this :-
// "scripts": {
    // "start": "nodemon index.js"
// }
//  So we can run our backend server using the command :- npm start 
// Or we can also run it using the command :- nodemon index.js 

// SO we will firstly install the nodemon package using :- npm install -D nodemon
// Here -D means --save-dev, which means that it will install the package as a development dependency. It will be used only during the development phase and not in production. It will be added to the devDependencies section of our package.json file.
// SO we are using this -D here because we will use nodemon only during development phase to run our backend server. In production phase, we will use the command :- node index.js to run our backend server.




// Once environmental variables gets saved in .env file, then we can use them anywhere in our project.
// But we can't use these environment variables directly in our code, we need to load them into our application using the dotenv package. To do that, we need to require the dotenv package and call the config() method at the very beginning of our application (usually in the index.js file) before any other code that uses environment variables. This will load the environment variables from the .env file into process.env, allowing us to access them throughout our application using process.env.KEY_NAME.


// This 'process' is actually used to track all the processes running in our operating system. It is a global object that provides information about the current Node.js process and allows us to interact with it. It provides various properties and methods that we can use to access information about the process, such as its ID, version, platform, memory usage, environment variables, and more. It also allows us to handle events related to the process, such as exit events, uncaught exceptions, and signals. We can use the process object to control the behavior of our Node.js application and manage its lifecycle.
// here we are using this condition to check that if our application is not running in production environment, then we will load the environment variables from the .env file using dotenv package. This is a common practice to ensure that we only load the .env file during development and testing, and not in production where environment variables are typically set through other means (like hosting platform settings or CI/CD pipelines). By doing this, we can keep our production environment secure and avoid accidentally exposing sensitive information from the .env file.
if(process.env.NODE_ENV !== "production"){  
    require('dotenv').config() // or import 'dotenv/config' if you're using ES6
}
// So all the environment variables that we have defined in our .env file will be available in our application through process.env object, and we can access them using process.env.KEY_NAME where KEY_NAME is the name of the environment variable that we want to access. For example, if we have an environment variable called SECRET in our .env file, we can access its value in our application using process.env.SECRET. This allows us to keep sensitive information like API keys, database credentials, and other configuration details out of our source code and easily manage them through environment variables.



//This express is actually a function here
const express = require("express");
//And we store the value return by this express() fn in a variable called app
//We generally by convention take the name of variable as app, but we can take any name also
const app = express();
//Now this 'app' will help us to create the server side web application
//This 'app' is actually the object
// SO now this 'app' object actually represents our express application and we can use it to configure our application, define routes, handle requests and responses, and manage middleware. 
// It provides a set of methods and properties that allow us to build a web server and handle HTTP requests and responses in a structured way. We can use this 'app' object to define the behavior of our application and create a server that listens for incoming requests on a specified port.


const mongoose = require("mongoose");
// mongoose is a library that creates a connection between MongoDB & Node.js JavaScript Runtime Environment.

// Here we are using the body-parser middleware to parse the incoming request bodies in a middleware before your handlers, available under the req.body property. It will help us to extract the data from the request body and make it available in the req.body object. It will help us to handle the incoming data from the client side and process it on the server side.
const bodyParser = require("body-parser");
const cors = require("cors");


// Here we are defining the port number on which our backend server will run. We are using the environment variable PORT if it is defined, otherwise we are using the default port number 8080. This allows us to easily change the port number in different environments (e.g., development, production) without having to modify the code. It also allows us to avoid conflicts with other applications that may be using the same port number.
const port = process.env.PORT || 8080;



// Here this process.env.ATLASDB_URL is the URL of our Atlas MongoDB database, which is running on cloud i.e on MongoDB Atlas.
const dbUrl = process.env.ATLASDB_URL;
// Here this dbUrl is the URL of our MongoDB database, which is running on cloud i.e on MongoDB Atlas. We are storing this URL in an environment variable called ATLAS_URL in our .env file for security reasons, so that we can easily manage it and keep it secure. We can access this environment variable in our application using process.env.ATLAS_URL.
// So here we will use this dbUrl to connect to our MongoDB database using mongoose.connect() method.



// Here this .connect() fn of mongoose is used to connect to mongoDB server

// Here As soon as we run this 'mongoose.connect(dbUrl);' command, it will actually awaits for a promise from the database itself.
// Here this .connect() method is a asynchronous method, so it will start a asynchronous process
// So most of the proccess that we will perform using mongoose will actually be asynchronous processes because sometimes it takes time to gets the response from the database, so it is necessary for these processes to be asynchronous
// SO we will handle all these functions asynchronously only.
// SO that's why we will use this way :-
// As we know that An async function always returns a Promise, here also it will return a promise
// What is happening here? :-
// mongoose.connect() is asynchronous. So, it returns a Promise
// await:
// pauses execution inside main()
// waits until MongoDB connection is done
// If connection succeeds → move on & print 'connected to DB successfully'
// If connection fails → throw an error

main().then(() => {
    console.log("connected to DB successfully");
})
.catch((error) => {
    console.log(error);
});

async function main() {
    await mongoose.connect(dbUrl);
}



// Here we will import the models for Holdings, Positions, and Orders from their respective files in the model folder. These models will allow us to interact with the corresponding collections in our MongoDB database, including creating, reading, updating, and deleting records.
const { HoldingsModel } = require("./model/holdingsModel");
const { PositionsModel } = require("./model/positionsModel");
const { OrdersModel } = require("./model/ordersModel");



// SO now we will use the app.use() method to add middleware to our Express application. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack. In this case, we are using two middleware functions: cors() and bodyParser.json(). The cors() middleware enables Cross-Origin Resource Sharing (CORS) for all routes, allowing our frontend application to make requests to our backend server from a different domain or port. The bodyParser.json() middleware parses incoming request bodies in JSON format and makes them available under the req.body property, allowing us to easily access and process data sent from the client side.
app.use(cors()); // Enable CORS for all routes
// CORS (Cross-Origin Resource Sharing) is a security feature built into browsers. By default, browsers block requests from one origin (say, http://localhost:3000) to another (http://localhost:8080).
// cors() is a middleware that tells Express: “It’s okay to accept requests from other origins.”
// With app.use(cors());, you’re enabling CORS for all routes in your server.
// This is essential when your frontend (React, Angular, etc.) runs on a different port/domain than your backend API.


//SO this is a standard line which we use always whenever we use the POST request
//Here app.use() means that this work must happens for all requests
//SO it means if for any post request, url encoded data or json data comes, then bodyparser will parse it to understand it
app.use(bodyParser.json());
// Here we are using the body-parser middleware to parse the incoming request bodies in a middleware before your handlers, available under the req.body property. It will help us to extract the data from the request body and make it available in the req.body object. It will help us to handle the incoming data from the client side and process it on the server side.
// body-parser is middleware that parses the body of incoming requests.
// bodyParser.json() specifically parses requests with Content-Type: application/json.
// It converts the raw JSON payload into a JavaScript object and attaches it to req.body.
// Without this, req.body would be undefined when you try to read JSON data from a POST request.




// Now we will create the route for accessing all holdings data from the database
// Here we are using the .get() method of the app object to define a route for the GET request to the /allHoldings endpoint. When a GET request is made to this endpoint, the callback function will be executed, which will retrieve all holdings data from the database using the HoldingsModel and send it back as a JSON response to the client. This allows us to access all holdings data from our MongoDB database through this API endpoint.
// Here this callback fn is async because we are accessing the database to get the data, so it is necessary to make this callback fn as async because it will take some time to get the response from the database. So we will use async/await to handle this asynchronous process.
app.get("/allHoldings", async (req, res) => {
    // To find all documents i.e holdings here in the 'holdings' collection, we can use an empty query object like this :-
    // Now here if we want we can use .then() & .catch() method to handle the promise returned by this .find() method of mongoose, but here we will use async-await way to handle this promise because it is more cleaner way to handle the asynchronous processes than using .then() & .catch() method, so we will use async-await way to handle this promise here.
    // So as we know that this .find() method of mongoose is asynchronous, so it will return a promise, so we will handle this promise using async-await way here.
    // So here we will use this way to handle this promise using async-await way :-
    // Here although we are using 'HoldingsModel' but it will actually access the 'holdings' collection in our MongoDB database because we have defined the 'HoldingsModel' using the 'holdingsSchema' which is associated with the 'holdings' collection in our MongoDB database. So when we use the 'HoldingsModel' to perform any operation, it will actually perform that operation on the 'holdings' collection in our MongoDB database.
    // And {} is an empty query object which means that we want to find all documents in the 'holdings' collection. So it will return all documents in the 'holdings' collection.
    let allHoldings = await HoldingsModel.find({});
    
    // returing the allHoldings data as a JSON response to the client
    res.json(allHoldings);
});




// Now we will create the route for accessing all positions data from the database
app.get("/allPositions", async (req, res) => {
    // To find all documents i.e positions here in the 'positions' collection, we can use an empty query object like this :-
    // Now here if we want we can use .then() & .catch() method to handle the promise returned by this .find() method of mongoose, but here we will use async-await way to handle this promise because it is more cleaner way to handle the asynchronous processes than using .then() & .catch() method, so we will use async-await way to handle this promise here.
    // So as we know that this .find() method of mongoose is asynchronous, so it will return a promise, so we will handle this promise using async-await way here.
    // So here we will use this way to handle this promise using async-await way :-
    // Here although we are using 'PositionsModel' but it will actually access the 'positions' collection in our MongoDB database because we have defined the 'PositionsModel' using the 'positionsSchema' which is associated with the 'positions' collection in our MongoDB database. So when we use the 'PositionsModel' to perform any operation, it will actually perform that operation on the 'positions' collection in our MongoDB database.
    // And {} is an empty query object which means that we want to find all documents in the 'positions' collection. So it will return all documents in the 'positions' collection.
    let allPositions = await PositionsModel.find({});
    
    // returing the allPositions data as a JSON response to the client
    // res is the response object provided by Express in a route handler.
    // json() is a method on res that sends a JSON‑formatted response back to the client (browser, Postman, curl, etc.).
    res.json(allPositions);
});




// Here we will need this app.use(bodyParser.json()) :-
// Because When a client (like your React frontend) sends a POST request with JSON data.
// By default, Express does not automatically parse the request body.That means req.body would be undefined if you try to access it in your route.
// bodyParser.json() middleware that tells Express:
// “Whenever a request comes in with Content-Type: application/json, parse the raw JSON string into a JavaScript object and attach it to req.body.”


// Here we are creating this post route to handle the new order creation & then saving that into the database also.
app.post("/newOrder", async (req, res) => {
    // Create a new instance of the OrdersModel (a Mongoose model)
    // We populate it with data coming from the request body.
    // req.body contains the JSON payload sent by the client (thanks to express.json() middleware).
    let newOrder = new OrdersModel({
        name: req.body.name,   // Customer name or order name
        qty: req.body.qty,     // Quantity of items ordered
        price: req.body.price, // Price of the order/item
        mode: req.body.mode,   // Mode of payment or delivery (e.g., "BUY", "SELL")
    });

    // Save the new order document into the MongoDB database.
    // .save() is an asynchronous operation provided by Mongoose.
    // It persists the document and returns a promise.
    newOrder.save();

    // Send a response back to the client confirming the order was saved.
    // This is a simple text response.
    res.send("Order saved!");
});






//this .listen() fn have two parameters & the 1st parameter is 'port' & end parameter is some callback fn
//.listen actually creates a web server which listens for incoming API requests
app.listen(port, () => {
    console.log(`app(i.e server) is listening to port ${port}`);
});  //So it will starts the server which continuously listens for API requests


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// SO to run this backend server, we will use the command :-
// npm start
//------OR-----
// nodemon index.js
//------OR------
// node index.js



