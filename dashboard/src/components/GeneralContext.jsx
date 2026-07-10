// Here we are creating this 'GeneralContext' component to be used in the dashboard of our application.


import { useState } from "react";

import BuyActionWindow from "./BuyActionWindow.jsx";
import SellActionWindow from "./SellActionWindow.jsx";

// createContext is a React function for global state sharing.
import { createContext } from "react";
// It’s part of React’s Context API.
// createContext lets you create a Context object that can hold global data (like theme, authentication, or user settings).
// This data can then be shared across components without manually passing props down multiple levels.



//createContext :-
// This is React’s Context API function.
// It creates a Context object that can hold global values/functions and share them across components without prop drilling.
// Here inside this context object, We’re passing an object with two functions as the default value.
// These are placeholder functions (they don’t do anything yet).
// The idea is: if a component consumes this context but no provider is wrapping it, these defaults prevent errors (so calling openBuyWindow() won’t crash).
// Why placeholders? :-
// If a component consumes this context outside of a <Provider>, it won’t crash when calling openBuyWindow() or closeBuyWindow().
// They act as safe defaults.
const GeneralContext =  createContext({
    openBuyWindow: (uid) => {},
    openSellWindow: (uid) => {},
    closeBuyWindow: () => {},
    closeSellWindow: () => {},
});
// GeneralContext is the Context object you’ll use with:-
// - <GeneralContext.Provider> → to supply real implementations of openBuyWindow and closeBuyWindow.
// - useContext(GeneralContext) → to consume those functions inside child components.



export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    const handleOpenSellWindow = (uid) => {
        setIsSellWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
    };

    return (
        // GeneralContext.Provider :- This is the Provider component created from our earlier createContext.
        // It makes values (openBuyWindow, closeBuyWindow) available to any child component that calls useContext(GeneralContext).
        // Here now, Instead of the placeholder functions from createContext, you now provide real implementations:
        // handleOpenBuyWindow → function that sets state to open the buy window for a given stock UID.
        // handleCloseBuyWindow → function that closes the buy window.
        // Any component inside this provider can call these functions without needing props.
        <GeneralContext.Provider value={{
            openBuyWindow: handleOpenBuyWindow,
            openSellWindow: handleOpenSellWindow,
            closeBuyWindow: handleCloseBuyWindow,
            closeSellWindow: handleCloseSellWindow,
        }}>
            {/* {props.children} :- This renders whatever child components are wrapped inside this provider.
            e.g <GeneralProvider>
                    <Dashboard />
                    <StockList />
                </GeneralProvider>
            → Both Dashboard and StockList will be able to access openBuyWindow and openSellWindow via context. */}
            {props.children}

            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
            {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
        </GeneralContext.Provider>
    );
};



// So now we also need to export this, so that we can use it in other components also.
export default GeneralContext;