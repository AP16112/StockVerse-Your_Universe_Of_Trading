// Here we are creating this 'Summary' component to be used in the dashboard of our application.


import { useState, useEffect } from "react";
import axios from "axios";

export default function Summary() {
    const [metrics, setMetrics] = useState({ invested: 0, current: 0, pnl: 0 });

    useEffect(() => {
        async function fetchHoldings() {
            try {
                const res = await axios.get("http://localhost:8080/allHoldings");
                const holdings = res.data || [];
                const invested = holdings.reduce((s, h) => s + (h.avg || 0) * (h.qty || 0), 0);
                const current = holdings.reduce((s, h) => s + (h.price || 0) * (h.qty || 0), 0);
                const pnl = current - invested;
                setMetrics({ invested, current, pnl });
            } catch (err) {
                // keep it simple: log error and leave default values
                console.error(err);
            }
        }

        fetchHoldings();
    }, []);

    const { invested, current, pnl } = metrics;
    const pnlPct = invested > 0 ? ((pnl / invested) * 100).toFixed(2) : "0.00";


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




    return (
        <>
            <div className="username">
                <h6>Welcome to Stockverse</h6>
                <hr className="divider" />
            </div>

            <div className="section">
                <span><p>Equity</p></span>

                <div className="data">
                    <div className="first">
                        <h3>{(current + 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
                        <p>Margin available</p>
                    </div>
                    <hr />

                    <div className="second">
                        <p>Margins used <span>0</span>{" "}</p>
                        <p>Opening balance <span>{invested.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>{" "}</p>
                    </div>
                </div>

                <hr className="divider" />
            </div>

            <div className="section">
                <span><p>Holdings ({allHoldings.length})</p></span>

                <div className="data">
                    <div className="first">
                        <h3 className={pnl >= 0 ? "profit" : "loss"}>{pnl.toFixed(2)} <small>{pnlPct}%</small>{" "}</h3>
                        <p>P&L</p>
                    </div>
                    <hr />

                    <div className="second">
                        <p>Current Value <span>{current.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>{" "}</p>
                        <p>Investment <span>{invested.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>{" "}</p>
                    </div>
                </div>
                <hr className="divider" />
            </div>
        </>
    );
}