// Here we are creating this 'Positions' component to be used in the dashboard of our application.


// Here this 'positions' variable is an array of objects.
// The 'positions' array contains objects representing the user's current stock holdings. 
// Each object includes details about a specific stock or financial product: 
// 'product' (the type of order, e.g., CNC for delivery trades), 
// 'name' (the stock's name), 
// 'qty' (the number of shares owned), 
// 'avg' (the average purchase price per share), 
// 'price' (the latest market price), 
// 'net' (the overall percentage gain or loss), 
// 'day' (the percentage change for the current trading day), 
// and 'isLoss' (a boolean indicating whether the holding is currently at a loss). 
// import { positions } from "../data/data.js";

// Now instead of using the positions data from the data.js file, we will fetch the positions data from our backend server using an API call. This will allow us to get the most up-to-date positions data from our database, rather than relying on static data in the frontend.
// It means that we will access the data from database through our backend server, which will handle the request and response. This way, we can ensure that the positions data displayed in the dashboard is always current and accurate, reflecting any changes made to the user's positions in real-time.

// We will use the useEffect hook to make the API call when the component mounts, and we will store the fetched data in a state variable using the useState hook. This way, we can dynamically render the positions data in the dashboard based on the latest information from our backend server.

import { useState, useEffect } from "react";

// Here we are importing the axios library, which is a popular JavaScript library used to make HTTP requests from the browser or Node.js. We will use axios to make an API call to our backend server to fetch the positions data from our database. Axios provides a simple and convenient way to send asynchronous HTTP requests and handle responses, making it easier to work with APIs in our React application.
import axios from "axios";
// But before importing this axios library, we need to install it first using the command :- npm install axios



export default function Positions() {
    // So here we are using the useState hook to create a state variable called 'allPositions' and a function called 'setAllPositions' to update that state variable. The initial value of 'allPositions' is an empty array, which means that when the component first renders, there will be no positions data to display. However, once we fetch the positions data from our backend server using an API call, we will update the 'allPositions' state variable with the fetched data, which will trigger a re-render of the component and display the updated positions data in the dashboard.
    const [allPositions, setAllPositions] = useState([]);


    // So, here we are using empty dependency array, which means that this useEffect will only run once when the component mounts. This is because we only want to fetch the positions data from our backend server once when the component is first rendered, and we don't want to make unnecessary API calls on subsequent renders. By using an empty dependency array, we ensure that the useEffect only runs once and doesn't trigger any additional re-renders or API calls.
    useEffect(() => {
        // So using axios, we are making a GET request to the URL "https://stockverse-backend-r4og.onrender.com/allPositions" to fetch the positions data from our backend server. This URL corresponds to the endpoint we defined in our backend server that returns the positions data from our database. When the request is successful, we will receive a response containing the positions data, which we will then use to update the 'allPositions' state variable using the 'setAllPositions' function. If there is an error during the request, we will log the error to the console for debugging purposes.
        axios.get("https://stockverse-backend-r4og.onrender.com/allPositions")
            .then((response) => {
                // So here we are using the setAllPositions function to update the allPositions state variable with the fetched data from our backend server. The response.data contains the positions data returned from the API call, and we pass that data to the setAllPositions function to update the state variable. This will trigger a re-render of the component and display the updated positions data in the dashboard.
                setAllPositions(response.data);
            })
            .catch((error) => {
                console.error("Error fetching positions data:", error);
            });
    }, []);

    // So we can pass some function inside useEffect like :-
    // useEffect( function )
    // Now whenever any changes happens in state, then this functions gets executed actually.
    // SO this function is actually a side-effect here
    // useEffect(function printSomething() {
    //     console.log("This is a side-effect");
    // });
    // Now currently this useEffect is trigerring on every rendering, but if we want that it must triger only at some particular change, then we will use dependencies
    // useEffect(function printSomething() {
    //     console.log("This is a side-effect");
    // }, [countx]);    
    // So now this fn will only triger when this countx changes & not when county changes

    // But if we want that this useEffect must trigger in both cases, then we can either remove this dependencies array or can use this :-
    // useEffect(function printSomething() {
    //     console.log("This is a side-effect");
    // }, [countx, county]);
    
    // But if we pass empty array, then this useEffect will only gets trigger during 1st time rendering & will not trigerred during re-rendering
    // useEffect(function printSomething() {
    //     console.log("This is a side-effect");
    // }, []); 


    return (
    <>
        <h3 className="title">Positions ({allPositions.length})</h3>
        
        <div className="order-table">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg.</th>
                    <th>LTP</th>
                    <th>P&L</th>
                    <th>Chg.</th>
                </tr>

                {/* Here this 'stock' represents each item in the 'positions' array & 'index' is the index of the current item */}
                {allPositions.map((stock, index) => {
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    
                    // So if this isLoss doesn't then also it will be false as in JavaScript objects If stock.isLoss is undefined (because the property doesn’t exist), the condition evaluates as falsy.
                    const dayClass = stock.isLoss ? "loss" : "profit";

                    return (
                        // In React, the key prop is used when rendering lists of elements (like your <tr> rows) to help React efficiently update and re-render the DOM.
                        <tr key={index}>
                            <td>{stock.product}</td>
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td className={profClass}>
                                {(curValue - stock.avg * stock.qty).toFixed(2)}
                            </td>
                            <td className={dayClass}>{stock.day}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    </>
  );
}