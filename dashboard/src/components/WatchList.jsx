// Here we are creating this 'WatchList' component to be used in the dashboard of our application.


// Here we will make use of Material UI for applying various kind of styles to our watch list components. 
// Here we are importing the Tooltip and Grow components from Material UI.
// The Tooltip component is used to display informative text when users hover over, focus on, or tap an element.
// The Grow component is a transition effect that can be used to animate the appearance of elements in the watch list.
import { Tooltip, Grow } from "@mui/material";
//-------------OR------------------
// import Tooltip from "@mui/material/Tooltip";
// import Grow from "@mui/material/Grow";

// Tooltips display informative text when users hover over, focus on, or tap an element.

import { useState } from "react";

// Here we are importing the watchlist data from the data.js file. This data will be used to display the watch list items in our dashboard.
// This is actually the dummy data that we will use to display the watch list items in our dashboard. In a real-world application, this data would typically come from an API or a database.
// So later on we will replace this dummy data with real-time data fetched from an API or a database. For now, we will use this static data to develop and test our watch list component.
import { watchlist } from "../data/data.js";


// Now to use these Material UI components, we will firstly need to import them.
import { KeyboardArrowUp, KeyboardArrowDown  } from '@mui/icons-material';

// Now to use 'BarChartOutlined' and 'MoreHoriz' icons from Material UI, we will need to import them.
import { BarChartOutlined, MoreHoriz } from '@mui/icons-material';



export default function WatchList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="watchlist-container">
        <div className="search-container">
            <input type="text"  name="search"  id="search"  placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"  className="search"/>
            <span className="counts"> {watchlist.length} / 50</span>
        </div>

        <ul className="list">
            {watchlist.map((stock, index) => {
                return (
                    // Here we are using this another React component called 'WatchListItem' to display each item in the watch list. We are passing the 'stock' object as a prop to this component. The 'key' prop is used to help React identify which items have changed, are added, or are removed. This helps in efficient updating of the UI.
                    // Here this key is used to uniquely identify which 'WatchListItem' it is.
                    // The key prop gives each WatchListItem a unique identity. This helps React know which component instance corresponds to which item in the array.
                    <WatchListItem stock={stock}  key={index} />
                    // We will actually not use this key value in 'WatchListItem' fn because Unlike normal props, key is not passed down to the child component (WatchListItem). it is just used here to uniquely identify which WatchListItem we are currently at. 
                );
            })}
        </ul>
    </div>
  );
}



// Here we are creating this 'WatchListItem' component to be used in the watch list of our dashboard. This component will be used to display each item in the watch list. It will receive a 'stock' object as a prop, which contains the details of the stock to be displayed.
// Here if we want, we can also create a separate file for this 'WatchListItem' component & then we can import it here. But for now, we will keep it in the same file for simplicity.
// For we will use many things like this watchlist array of objects, etc in this, which we already have in this file. So we will keep it in the same file for simplicity.
// And for we will not use this 'WatchListItem' component anywhere else in our application. So we will keep it in the same file for simplicity.

// Here no need to export this 'WatchListItem' component because we will not use it anywhere else in our application. We will only use it in this 'WatchList' component. So we will keep it in the same file for simplicity.
// So we will create it as arrow function here, with props in it also.
const WatchListItem = ({ stock }) => {
    // Here  we will use this 'showWatchlistActions' state variable to show extra options when mouse is hover on item.
    // showWatchlistActions state is a simple boolean flag that controls whether extra actions for the watchlist should be visible.
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    // Here this is a event handler function that will be called when the mouse enters the watch list item. It will set the 'showWatchlistActions' state to true, which will make the extra actions visible.
    // Here this 'event' parameter is an object that contains information about the event that occurred. In this case, it will contain information about the mouse enter event.
    const handleMouseEnter = (event) => {
        // When the mouse hovers over the element, the actions become visible.
        setShowWatchlistActions(true);
    };

    const handleMouseLeave = (event) => {
        // When the mouse leaves, the actions are hidden again.
        setShowWatchlistActions(false);
    };


    return (
        // When the mouse hovers over the element, the actions become visible. And When the mouse leaves, the actions are hidden again.
        // onMouseEnter is a React event handler (based on the native DOM event) that fires when the mouse pointer enters the boundaries of an element.
        // As we are calling this 'WatchListItem' component inside the <ul> tag in 'WatchList' component, so that's why we are using <li> tag here in this 'WatchListItem' component. So that it can be a child of <ul> tag in 'WatchList' component.
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    
                    {/* Here we are using this 'keyboardArrowDown' and 'keyboardArrowUp' components to display the appropriate arrow based on the stock's performance.
                    These components are available in Material UI & we are using them here.
                    SO here we are actually using the Material UI components for showing up and down arrows here */}
                    {/* Here we are giving them these custom classes for which we already defined the CSS styling */}
                    {stock.isDown ? (<KeyboardArrowDown className="down" />) : (<KeyboardArrowUp className="up" />)}
                    <span className="price">{stock.price}</span>
                </div>
            </div>

            {/* Here Now we will firstly check whether showWatchlistActions is true i.e whether user hovers over the item & if yes then we will render this 'WatchListActions' component to show all the actions */}
            {showWatchlistActions && <WatchListActions uid={stock.name} />}
        </li>
    );
};



// Here we are creating this 'WatchListActions' component to be used in the watch list of our dashboard. This component will be used to display the extra actions that can be performed on a watch list item. It will receive a 'uid' prop, which is the unique identifier of the stock for which the actions are being displayed.
// Here no need to export this 'WatchListActions' component because we will not use it anywhere else in our application. We will only use it in this 'WatchListItem' component. So we will keep it in the same file for simplicity.
// So we will create it as arrow function here, with props in it also.
const WatchListActions = ({ uid }) => {

    return (
        <span className="actions">
            <span>
                {/* Here we are using Tooltip & Grow from Material UI icons actuallly */}
                {/* <Tooltip> → A Material UI component that wraps another element and shows extra info when you hover/focus on it.
                title="Buy (B)" → The text displayed inside the tooltip. Here it shows Buy (B).
                placement="top" → Positions the tooltip above the button.
                arrow → Adds a small arrow pointing to the element, making the tooltip visually connected.
                TransitionComponent={Grow} → Controls the animation when the tooltip appears/disappears. Grow makes it smoothly scale in/out.
                onClick={handleBuyClick} → Attaches a click handler to the tooltip wrapper. When the button is clicked, it triggers your handleBuyClick function.
                <button className="buy">Buy</button> → The actual button being wrapped. The tooltip shows when you hover over this button. */}
                {/* SO when we hover over this buy button, it will actually show this tooltip */}
                <Tooltip title="Buy (B)"  placement="top"   arrow   TransitionComponent={Grow}>
                    <button className="buy">Buy</button>
                </Tooltip>
                
                <Tooltip  title="Sell (S)"   placement="top"    arrow    TransitionComponent={Grow}>
                    <button className="sell">Sell</button>
                </Tooltip>

                <Tooltip  title="Analytics (A)"   placement="top"    arrow    TransitionComponent={Grow}>
                    <button className="action">
                        {/* Here we are using the BarChartOutlined icon from Material UI, it will creates an Analytics button with a bar chart icon  */}
                        {/* <BarChartOutlined className="icon" /> → A Material UI icon component (a bar chart outline) placed inside the button. This visually represents “Analytics.” */}
                        <BarChartOutlined className="icon" />
                    </button>
                </Tooltip>

                <Tooltip title="More" placement="top"   arrow    TransitionComponent={Grow}>
                        <button className="action">
                            {/* Here we are using the MoreHoriz icon from Material UI, it will creates a "More" button with a horizontal ellipsis icon */}
                            <MoreHoriz className="icon" />
                        </button>
                </Tooltip>
            </span>
        </span>
    );
}
