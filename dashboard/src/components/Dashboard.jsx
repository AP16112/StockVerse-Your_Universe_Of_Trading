// Here we are creating this 'Dashboard' component to be used in the dashboard of our application.

// Here it will actually to be used to show the complete dashboard of our application. It will be the main component that will be used to show the complete dashboard of our application.

import { Route, Routes } from "react-router-dom";
import Summary from "./Summary.jsx";
import Orders from "./Orders.jsx";
import Holdings from "./Holdings.jsx";
import Positions from "./Positions.jsx";
import Funds from "./Funds.jsx";
import WatchList from "./WatchList.jsx";



export default function Dashboard() {
  return (
    <div className="dashboard-container">
        {/* Here we are rendering the watch list component */}
        <WatchList />

        <div className="content">
            <Routes>
                {/* Here we are defining the routes for different sections of the dashboard */}
                {/* Here we are using exact path & not just path because we want the summary page to be at the root path */}
                {/* By default, <Route path="/"> matches any path that starts with / (so /orders, /summary, etc.). SO exact ensures the route only matches exactly /, not /orders or /anything. */}
                <Route exact path="/" element={<Summary />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/holdings" element={<Holdings />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/funds" element={<Funds />} />
            </Routes>
        </div>
    </div>
  );
}

