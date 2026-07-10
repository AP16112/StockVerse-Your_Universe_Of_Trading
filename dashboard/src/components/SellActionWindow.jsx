// Here we are creating this 'SellActionWindow' component to be used in the dashboard of our application.
// It will open when the user clicks the sell button and submit a SELL order to the database.

import { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext.jsx";
import "./SellActionWindow.css";

export default function SellActionWindow({ uid }) {
    const generalContext = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleSellClick = () => {
        axios.post("http://localhost:8080/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "SELL",
        });

        generalContext.closeSellWindow();
    };

    const handleCancelClick = () => {
        generalContext.closeSellWindow();
    };

    return (
        <div className="sell-container" id="sell-window" draggable="true">
            <div className="sell-header">
                <h3>Sell Order</h3>
                <p>Sell {uid} stock from your watchlist.</p>
            </div>

            <div className="sell-order">
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

            <div className="sell-buttons">
                <span className="hint">Sell order will be saved as a new order.</span>
                <div>
                    <button className="btn btn-sell" onClick={handleSellClick}>
                        Sell
                    </button>
                    <button className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
