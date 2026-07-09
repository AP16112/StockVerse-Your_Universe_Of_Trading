// Here we will use this 'initData' file to do all the initialization work like database initialization & all.
// Because whenever we are creating a new website, we need to initialize the database first, so that we can perform all the operations on that database in future 

// SO we will used this file to initialize the dummy database with some dummy data for holdings, orders & positions, so that we can easily test our website and also we can easily perform all the operations on that database in future

// So we will write all the code related to database connection in this file of this 'init' folder, so that we can easily initialize the database whenever we want to do that by simply running these files of 'init' folder, so it is a good practice to write all the code related to database connection in a separate file only, so that we can easily manage our code and it will be easy to understand also.

// ANd we will only run this file once to initialize the database, so after that we will not run this file again and again.


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

const port = 8080;

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



// Now we will define a route for adding dummy holdings data to the database. This route will be accessible via a GET request to the "/addHoldings" endpoint. When this endpoint is accessed, it will create and save multiple holdings records in the database using the HoldingsModel.
// Here we are using async function because we are performing asynchronous operations inside this route, such as saving data to the database. By using async, we can use await to wait for these operations to complete before sending a response back to the client.
// SO when we access this URL, it will call this callback function and it will add the dummy holdings data to the database using the HoldingsModel. This will allow us to easily initialize our database with some sample data for testing and development purposes.
app.get("/addHoldings", async (req, res) => {
    // This is the dummy data for holdings that we will add to the database. This data is an array of objects, where each object represents a holding with its name, quantity, average price, current price, net change, and daily change. We will use this data to create and save multiple holdings records in the database using the HoldingsModel.
    const temHoldings = [
        {
            name: "BHARTIARTL",
            qty: 2,
            avg: 538.05,
            price: 541.15,
            net: "+0.58%",
            day: "+2.99%",
        },
        {
            name: "HDFCBANK",
            qty: 2,
            avg: 1383.4,
            price: 1522.35,
            net: "+10.04%",
            day: "+0.11%",
        },
        {
            name: "HINDUNILVR",
            qty: 1,
            avg: 2335.85,
            price: 2417.4,
            net: "+3.49%",
            day: "+0.21%",
        },
        {
            name: "INFY",
            qty: 1,
            avg: 1350.5,
            price: 1555.45,
            net: "+15.18%",
            day: "-1.60%",
            isLoss: true,
        },
        {
            name: "ITC",
            qty: 5,
            avg: 202.0,
            price: 207.9,
            net: "+2.92%",
            day: "+0.80%",
        },
        {
            name: "KPITTECH",
            qty: 5,
            avg: 250.3,
            price: 266.45,
            net: "+6.45%",
            day: "+3.54%",
        },
        {
            name: "M&M",
            qty: 2,
            avg: 809.9,
            price: 779.8,
            net: "-3.72%",
            day: "-0.01%",
            isLoss: true,
        },
        {
            name: "RELIANCE",
            qty: 1,
            avg: 2193.7,
            price: 2112.4,
            net: "-3.71%",
            day: "+1.44%",
        },
        {
            name: "SBIN",
            qty: 4,
            avg: 324.35,
            price: 430.2,
            net: "+32.63%",
            day: "-0.34%",
            isLoss: true,
        },
        {
            name: "SGBMAY29",
            qty: 2,
            avg: 4727.0,
            price: 4719.0,
            net: "-0.17%",
            day: "+0.15%",
        },
        {
            name: "TATAPOWER",
            qty: 5,
            avg: 104.2,
            price: 124.15,
            net: "+19.15%",
            day: "-0.24%",
            isLoss: true,
        },
        {
            name: "TCS",
            qty: 1,
            avg: 3041.7,
            price: 3194.8,
            net: "+5.03%",
            day: "-0.25%",
            isLoss: true,
        },
        {
            name: "WIPRO",
            qty: 4,
            avg: 489.3,
            price: 577.75,
            net: "+18.08%",
            day: "+0.32%",
        },
    ];


    // Here we are using forEach loop of JS actually.
    // Here we are using forEach() method to iterate over each item in the temHoldings array. For each item, we create a new instance of the HoldingsModel using the data from the item, and then we save that instance to the database using the save() method. This will add all the dummy holdings data to the database when the "/addHoldings" endpoint is accessed.
    temHoldings.forEach((item) => {
        let newHolding = new HoldingsModel({
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
        });

        // Now we need to save this in the mongoDB database, otherwise it won't get stored in database.
        newHolding.save();
    });

    // So if no errors occurs, we will send this as response                   
    res.send("Holdings data added successfully");
});




// Now we will define a route for adding dummy positions data to the database. This route will be accessible via a GET request to the "/addPositions" endpoint. When this endpoint is accessed, it will create and save multiple positions records in the database using the PositionsModel.
// Here we are using async function because we are performing asynchronous operations inside this route, such as saving data to the database. By using async, we can use await to wait for these operations to complete before sending a response back to the client.
// SO when we access this URL, it will call this callback function and it will add the dummy positions data to the database using the PositionsModel. This will allow us to easily initialize our database with some sample data for testing and development purposes.
app.get("/addPositions", async (req, res) => {
    // This is the dummy data for positions that we will add to the database. This data is an array of objects, where each object represents a position with its product, name, quantity, average price, current price, net change, and daily change. We will use this data to create and save multiple positions records in the database using the PositionsModel.
    const temPositions = [
        {
            product: "CNC",
            name: "EVEREADY",
            qty: 2,
            avg: 316.27,
            price: 312.35,
            net: "+0.58%",
            day: "-1.24%",
            isLoss: true,
        },
        {
            product: "CNC",
            name: "JUBLFOOD",
            qty: 1,
            avg: 3124.75,
            price: 3082.65,
            net: "+10.04%",
            day: "-1.35%",
            isLoss: true,
        },
    ];


    // Here we are using forEach loop of JS actually.
    // Here we are using forEach() method to iterate over each item in the temPositions array. For each item, we create a new instance of the PositionsModel using the data from the item, and then we save that instance to the database using the save() method. This will add all the dummy positions data to the database when the "/addPositions" endpoint is accessed.
    temPositions.forEach((item) => {
        let newPosition = new PositionsModel({
            product: item.product,
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isLoss: item.isLoss,
        });

        // Now we need to save this in the mongoDB database, otherwise it won't get stored in database.
        newPosition.save();
    });

    // So if no errors occurs, we will send this as response                   
    res.send("Positions data added successfully");
});




//this .listen() fn have two parameters & the 1st parameter is 'port' & end parameter is some callback fn
//.listen actually creates a web server which listens for incoming API requests
app.listen(port, () => {
    console.log(`app(i.e server) is listening to port ${port}`);
});  //So it will starts the server which continuously listens for API requests


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// SO to run this in order to initialize the database, we will use the command :-
// nodemon initData.js
// Then we will go to the browser & type this URL for adding holdings data :- localhost:8080/addHoldings   
// And then we will type this URL for adding positions data :- localhost:8080/addPositions

// And we will run this file only once & not multiple times actually.


