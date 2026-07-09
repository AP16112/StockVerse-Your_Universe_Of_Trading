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


//This express is actually a function here
const express = require("express");
//And we store the value return by this express() fn in a variable called app
//We generally by convention take the name of variable as app, but we can take any name also
const app = express();
//Now this 'app' will help us to create the server side web application
//This 'app' is actually the object
// SO now this 'app' object actually represents our express application and we can use it to configure our application, define routes, handle requests and responses, and manage middleware. 
// It provides a set of methods and properties that allow us to build a web server and handle HTTP requests and responses in a structured way. We can use this 'app' object to define the behavior of our application and create a server that listens for incoming requests on a specified port.


const port = 8080;









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



