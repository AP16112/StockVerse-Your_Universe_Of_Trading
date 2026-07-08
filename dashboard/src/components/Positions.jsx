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
import { positions } from "../data/data.js";


export default function Positions() {
  return (
    <>
        <h3 className="title">Positions ({positions.length})</h3>
        
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
                {positions.map((stock, index) => {
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