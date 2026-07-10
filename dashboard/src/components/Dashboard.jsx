// Here we are creating this 'Dashboard' component to be used in the dashboard of our application.

// Here it will actually to be used to show the complete dashboard of our application. It will be the main component that will be used to show the complete dashboard of our application.

import { Route, Routes } from "react-router-dom";
import Summary from "./Summary.jsx";
import Orders from "./Orders.jsx";
import Holdings from "./Holdings.jsx";
import Positions from "./Positions.jsx";
import Funds from "./Funds.jsx";
import WatchList from "./WatchList.jsx";

// Here we are importing this GeneralContextProvider function or component to be used here.
import { GeneralContextProvider } from "./GeneralContext.jsx";


export default function Dashboard() {
  return (
    <div className="dashboard-container">
        {/* GeneralContextProvider :-
        This is our custom provider component (built around GeneralContext.Provider).
        It wraps child components and supplies them with shared state and functions (like openBuyWindow and closeBuyWindow).
        Think of it as a “global manager” for certain app behaviors — in your case, managing the buy window logic. */} 
        {/* {props.children} :- Inside GeneralContextProvider, we wrote {props.children}.
        That means whatever we wrap inside <GeneralContextProvider> ... </GeneralContextProvider> gets rendered there.
        In this case, the child is <WatchList />.
        So effectively, WatchList is being rendered inside the provider, and it now has access to the context values. */}
        
        {/* Because WatchList is inside the provider:
        It can call useContext(GeneralContext) to access:
        openBuyWindow(uid) → opens the buy window for a stock.
        closeBuyWindow() → closes the buy window.
        It doesn’t need props passed down from parent components — the provider makes these functions available globally. */}
        <GeneralContextProvider>
          {/* Here we are rendering the watch list component */}
          <WatchList />
        </GeneralContextProvider>

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

