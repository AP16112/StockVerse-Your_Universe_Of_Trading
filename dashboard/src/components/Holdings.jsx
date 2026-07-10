// Here we are creating this 'Holdings' component to be used in the dashboard of our application.


// Here this 'holdings' variable is an array of objects, where each object represents a stock or financial instrument that the user currently owns. Each object contains the following properties: 'instrument' (the name of the stock or financial instrument), 'quantity' (the number of shares or units owned), 'avgCost' (the average cost per share or unit), 'ltp' (the last traded price), 'curVal' (the current value of the holding), 'pnl' (the profit or loss for the holding), 'netChg' (the net change in value), and 'dayChg' (the change in value for the day). This data will be used to display the user's holdings in the dashboard.
// import { holdings } from "../data/data.js";

// Now instead of using the holdings data from the data.js file, we will fetch the holdings data from our backend server using an API call. This will allow us to get the most up-to-date holdings data from our database, rather than relying on static data in the frontend.
// It means that we will access the data from database through our backend server, which will handle the request and response. This way, we can ensure that the holdings data displayed in the dashboard is always current and accurate, reflecting any changes made to the user's holdings in real-time.

// We will use the useEffect hook to make the API call when the component mounts, and we will store the fetched data in a state variable using the useState hook. This way, we can dynamically render the holdings data in the dashboard based on the latest information from our backend server.

import { useState, useEffect } from "react";

// Here we are importing the axios library, which is a popular JavaScript library used to make HTTP requests from the browser or Node.js. We will use axios to make an API call to our backend server to fetch the holdings data from our database. Axios provides a simple and convenient way to send asynchronous HTTP requests and handle responses, making it easier to work with APIs in our React application.
import axios from "axios";
// But before importing this axios library, we need to install it first using the command :- npm install axios


import { VerticalGraph } from "./VerticalGraph.jsx";

export default function Holdings() {
    // So here we are using the useState hook to create a state variable called 'allHoldings' and a function called 'setAllHoldings' to update that state variable. The initial value of 'allHoldings' is an empty array, which means that when the component first renders, there will be no holdings data to display. However, once we fetch the holdings data from our backend server using an API call, we will update the 'allHoldings' state variable with the fetched data, which will trigger a re-render of the component and display the updated holdings data in the dashboard.
    const [allHoldings, setAllHoldings] = useState([]);


    // So, here we are using empty dependency array, which means that this useEffect will only run once when the component mounts. This is because we only want to fetch the holdings data from our backend server once when the component is first rendered, and we don't want to make unnecessary API calls on subsequent renders. By using an empty dependency array, we ensure that the useEffect only runs once and doesn't trigger any additional re-renders or API calls.
    useEffect(() => {
        // So using axios, we are making a GET request to the URL "http://localhost:5000/holdings" to fetch the holdings data from our backend server. This URL corresponds to the endpoint we defined in our backend server that returns the holdings data from our database. When the request is successful, we will receive a response containing the holdings data, which we will then use to update the 'allHoldings' state variable using the 'setAllHoldings' function. If there is an error during the request, we will log the error to the console for debugging purposes.
        axios.get("http://localhost:8080/allHoldings")
            .then((response) => {
                // So here we are using the setAllHoldings function to update the allHoldings state variable with the fetched data from our backend server. The response.data contains the holdings data returned from the API call, and we pass that data to the setAllHoldings function to update the state variable. This will trigger a re-render of the component and display the updated holdings data in the dashboard.
                setAllHoldings(response.data);
            })
            .catch((error) => {
                console.error("Error fetching holdings data:", error);
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



    // Extract labels for the chart from the allHoldings array.
    // allHoldings is assumed to be an array of objects, each representing a stock holding.
    // Example: [{ name: "Apple", price: 150 }, { name: "Tesla", price: 700 }]
    // We map over the array and pick out the "name" property for each stock.
    // These names will be displayed along the x-axis of the chart.
    const labels = allHoldings.map((subArray) => subArray["name"]);
    // It will return a new array containing only the name property values from each object inside the allHoldings array.


    // Define the data object for Chart.js / react-chartjs-2.
    // This contains both the labels (x-axis) and datasets (y-axis values).
    const data = {
        // Labels for the x-axis (stock names).
        labels,

        // datasets is an array because you can plot multiple series on the same chart.
        datasets: [
            {
                // Label for this dataset (shown in the legend).
                label: "Stock Price",

                // Extract the price of each stock from allHoldings.
                // This array of numbers will be plotted against the labels.
                data: allHoldings.map((stock) => stock.price),

                // Background color of the bars in the chart.
                // Here it's a semi-transparent red shade.
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };


    return (
    <>
        <h3 className="title">Holdings ({allHoldings.length})</h3>

        <div className="order-table">
            <table>
                <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>

                {/* Here this 'stock' represents each item in the 'holdings' array & 'index' is the index of the current item */}
                {allHoldings.map((stock, index) => {
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    
                    // So if this isLoss doesn't then also it will be false as in JavaScript objects If stock.isLoss is undefined (because the property doesn’t exist), the condition evaluates as falsy.
                    const dayClass = stock.isLoss ? "loss" : "profit";

                    return (
                        // In React, the key prop is used when rendering lists of elements (like your <tr> rows) to help React efficiently update and re-render the DOM.
                        <tr key={index}>
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td>{curValue.toFixed(2)}</td>
                            <td className={profClass}>
                                {(curValue - stock.avg * stock.qty).toFixed(2)}
                            </td>
                            <td className={profClass}>{stock.net}</td>
                            <td className={dayClass}>{stock.day}</td>
                        </tr>
                    );
                })}
            </table>
        </div>

        <div className="row">
            <div className="col">
                <h5>29,875.<span>55</span>{" "}</h5>
                <p>Total investment</p>
            </div>
            <div className="col">
                <h5>31,428.<span>95</span>{" "}</h5>
                <p>Current value</p>
            </div>
            <div className="col">
                <h5>1,553.40 (+5.20%)</h5>
                <p>P&L</p>
            </div>
        </div>

        {/* Here we are calling this VerticalGraph component with 'data' as the prop so that it can show the vertical bar plot actually */}
        <VerticalGraph data={data}/>
    </>
  );
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// useEffect() :-
// It is also an Hook in React.
// The Effect Hook lets you perform side effects in function components

// When our component is rendered first time, or whenever our component is rebdered  and we want to perform some task, then we can make use of useEffect hook.
// e.g when our state variable is changing , then it means that our component gets re-renders & if before rendering we want to perform some task, then we can do that using this useEffect() hook

// Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

// Side effects are things that happen outside the normal rendering flow, such as:-
// Fetching data from an API
// Subscribing/unsubscribing to events
// Updating the DOM manually
// Setting timers

// So we can pass some function inside useEffect like :-
// useEffect( function )
// Now whenever any changes happens in state, then this functions gets executed actually.
// SO this function is actually a side-effect here
// e.g useEffect(function printSomething() {
//     console.log("This is a side-effect");
// });

// Now we can also pass the dependencies inside this useEffect along with setup( i.e some function):-
// useEffect(setup, dependencies);
// These dependencies are nothing but our state variables.

// setup (the first argument) :-
// This is the function where you put your side effect logic.
// Example: fetching data, setting up a timer, subscribing to an event.
// It can also return a cleanup function to undo the effect when the component unmounts or before the effect re-runs.

// dependencies (the second argument) :-
// This is an array of values that React watches.
// The effect runs again whenever any of these values change.
// It controls when the effect executes.

// Examples: Empty array [] → run only once after initial render.
// No array → run after every render.
// Specific values [count] → run after initial render and whenever count changes.


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Real Life Use Cases of useEffect() :-
// e.g during 1st time rendering, before rendering our app is fetching some data from database which will take some time
// And during that time, we want that some loader must appear on screen, so we can use this useEffect to show loader using some function before our 1st time rendering.

// Similarly, we have soo many real life use cases of this useEffect which are given in React documentation.

// One of the use case is :-
// API Calls - Asynchronous Operations :-
// Asynchronous Operations like fetching data from DB or from mapbox or we are using google APIs etc.

// So here we will create this Joker component which will print some joke & in that we will use API calls & look for how useEffect will be used in that.

