// Here we are creating this 'BuyActionWindow' component to be used in the dashboard of our application.
// We will use this component to show the buy action window when the user clicks on the 'Buy' button in the dashboard. This component will allow the user to enter the quantity and price of the stock they want to buy, and then submit the order to the backend server. The component will also have a 'Cancel' button that will close the buy action window without submitting the order.

import { Link } from "react-router-dom";
import { useState } from "react";

// Here we are importing the axios library, which is a popular JavaScript library used to make HTTP requests from the browser or Node.js. We will use axios to make an API call to our backend server to fetch the holdings data from our database. Axios provides a simple and convenient way to send asynchronous HTTP requests and handle responses, making it easier to work with APIs in our React application.
import axios from "axios";
// But before importing this axios library, we need to install it first using the command :- npm install axios


// Here we are using context because this BuyActionWindow component is affecting multiple components i.e WatchList & dashboard components.
// SO when data is shared between different components, then that can be done using context.
import GeneralContext from "./GeneralContext.jsx";

import "./BuyActionWindow.css";


// Here we are taking 'uid' as a prop in this component, which will be used to identify the stock that the user wants to buy. The 'uid' will be passed from the parent component (dashboard) when the user clicks on the 'Buy' button for a specific stock. We will use this 'uid' to send the order details to the backend server when the user submits the buy order.
export default function BuyActionWindow({ uid }) {
    // Here we are using the useState hook to create two state variables, 'stockQuantity' and 'stockPrice', which will be used to store the quantity and price of the stock that the user wants to buy. The initial value of 'stockQuantity' is set to 1, and the initial value of 'stockPrice' is set to 0.0. These state variables will be updated when the user enters the quantity and price in the input fields of the buy action window.
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleBuyClick = () => {
        // Here we are making a POST request to the backend server using axios to submit the buy order. We are sending the 'uid', 'stockQuantity', and 'stockPrice' as the order details in the request body. The backend server will process this request and store the order details in the database. After the order is successfully submitted, we will close the buy action window by calling the 'closeBuyWindow' function from the GeneralContext.
        axios.post("http://localhost:8080/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY",
        });

        // SO after the order is submitted, we will close the buy action window by calling the 'closeBuyWindow' function from the GeneralContext. This will hide the buy action window from the dashboard and return the user to the main dashboard view.
        // Here this GeneralContext is a context object that we created in the GeneralContext.jsx file, which allows us to share state and functions between different components in our application. The 'closeBuyWindow' function is defined in the GeneralContext and is used to close the buy action window when the user clicks on the 'Buy' button or the 'Cancel' button.
        GeneralContext.closeBuyWindow();
    };

    // Here we are defining the 'handleCancelClick' function, which will be called when the user clicks on the 'Cancel' button in the buy action window. This function will close the buy action window without submitting the order by calling the 'closeBuyWindow' function from the GeneralContext. This allows the user to exit the buy action window and return to the main dashboard view without making any changes or submitting any orders.
    const handleCancelClick = () => {
        GeneralContext.closeBuyWindow();
    };

    return (
        // Here draggable="true" is used to make the buy action window draggable, allowing the user to move it around the dashboard for better visibility and convenience. This enhances the user experience by providing flexibility in positioning the buy action window according to the user's preference.
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    {/* Here this 'fieldset' is used to group related input elements together for better organization and accessibility. It is actually a HTML element */}
                    <fieldset>
                        {/* Here this legend Provides a caption or title for the grouped inputs. Here, "Qty." labels the input as “Quantity”. */}
                        <legend>Qty.</legend>
                        {/* Here this value={stockQuantity} → makes it a controlled component in React. The displayed value comes from the stockQuantity state variable. */}
                        <input type="number"   name="qty"   id="qty"  onChange={(event) => setStockQuantity(event.target.value)}   value={stockQuantity}/>
                    </fieldset>
            
                    <fieldset>
                        <legend>Price</legend>
                        <input  type="number"  name="price"  id="price"  step="0.05"  onChange={(event) => setStockPrice(event.target.value)}  value={stockPrice}/>
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link className="btn btn-blue"   onClick={handleBuyClick}>Buy</Link>
                    <Link to=""  className="btn btn-grey"   onClick={handleCancelClick}>Cancel</Link>
                </div>
            </div>
        </div>
    );
};
