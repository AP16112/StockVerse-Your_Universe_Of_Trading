// Here we are creating this 'BuyActionWindow' component to be used in the dashboard of our application.
// We will use this component to show the buy action window when the user clicks on the 'Buy' button in the dashboard. This component will allow the user to enter the quantity and price of the stock they want to buy, and then submit the order to the backend server. The component will also have a 'Cancel' button that will close the buy action window without submitting the order.

import { useState, useContext } from "react";

// Here we are importing the axios library, which is a popular JavaScript library used to make HTTP requests from the browser or Node.js. We will use this axios library to make an API call to our backend server to submit the buy order.
import axios from "axios";

// Here we are using context because this BuyActionWindow component needs to close the modal after actions like buy or cancel.
import GeneralContext from "./GeneralContext.jsx";

import "./BuyActionWindow.css";

// Here we are taking 'uid' as a prop in this component, which will be used to identify the stock that the user wants to buy.
export default function BuyActionWindow({ uid }) {
    const generalContext = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleBuyClick = () => {
        axios.post("http://localhost:8080/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY",
        });

        generalContext.closeBuyWindow();
    };

    const handleCancelClick = () => {
        generalContext.closeBuyWindow();
    };

    return (
        <div className="buy-container" id="buy-window" draggable="true">
            <div className="buy-header">
                <h3>Buy Order</h3>
                <p>Buy {uid} stock from your watchlist.</p>
            </div>

            <div className="buy-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            onChange={(event) => setStockQuantity(event.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(event) => setStockPrice(event.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buy-buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <button type="button" className="btn btn-blue" onClick={handleBuyClick}>
                        Buy
                    </button>
                    <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
