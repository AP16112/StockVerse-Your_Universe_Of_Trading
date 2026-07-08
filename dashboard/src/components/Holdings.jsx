// Here we are creating this 'Holdings' component to be used in the dashboard of our application.


// Here this 'holdings' variable is an array of objects, where each object represents a stock or financial instrument that the user currently owns. Each object contains the following properties: 'instrument' (the name of the stock or financial instrument), 'quantity' (the number of shares or units owned), 'avgCost' (the average cost per share or unit), 'ltp' (the last traded price), 'curVal' (the current value of the holding), 'pnl' (the profit or loss for the holding), 'netChg' (the net change in value), and 'dayChg' (the change in value for the day). This data will be used to display the user's holdings in the dashboard.
import { holdings } from "../data/data.js";


export default function Holdings() {
  return (
    <>
        <h3 className="title">Holdings ({holdings.length})</h3>

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
                {holdings.map((stock, index) => {
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    
                    // So if this isLoss doesn't then also it will be false as in JavaScript objects If stock.isLoss is undefined (because the property doesn’t exist), the condition evaluates as falsy.
                    const dayClass = stock.isLoss ? "loss" : "profit";

                    return (
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
    </>
  );
}