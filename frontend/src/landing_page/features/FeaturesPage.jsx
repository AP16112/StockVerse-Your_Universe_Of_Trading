// Here we are creating this 'FeaturesPage' component to be used in the features section of our application. It serves as the main entry point for users visiting the features section and provides an overview of what our features offer.

import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import HeroSection from "./HeroSection.jsx";
import { Link } from 'react-router-dom';


export default function FeaturesPage() {
    return ( 
        <>
            <HeroSection/>
            <LeftSection  
                imageURL="media/images/watchlist.png"  
                featureName="WatchList"  
                featureDescription="Track the stocks you care about with price snapshots, trends, and quick trade actions straight from your dashboard."  
                tryDemo="https://stockverse-your-universe-of-trading.vercel.app" 
                learnMore="https://stockverse-your-universe-of-trading.vercel.app" 
            />
            <RightSection
                imageURL="media/images/holdings.png"  
                featureName="Holdings"  
                featureDescription="View your current portfolio with quantities, average cost, current values, and profit/loss at a glance."   
                learnMore="https://stockverse-your-universe-of-trading.vercel.app" 
            />
            <LeftSection  
                imageURL="media/images/positions.png"  
                featureName="Positions"  
                featureDescription="Inspect open positions and monitor unrealised gains, daily change, and trade status for active holdings."  
                tryDemo="https://stockverse-your-universe-of-trading.vercel.app"
                learnMore="https://stockverse-your-universe-of-trading.vercel.app"
            />
            <RightSection
                imageURL="media/images/orders.png"  
                featureName="Orders"  
                featureDescription="Monitor buy and sell orders with instrument details, order type, quantity, and price for a simulated trading flow."   
                learnMore="https://stockverse-your-universe-of-trading.vercel.app"
            />
            <LeftSection  
                imageURL="media/images/summary.png"  
                featureName="Summary"  
                featureDescription="Review your portfolio summary with invested amount, current value, and overall P&L metrics."  
                tryDemo="https://stockverse-your-universe-of-trading.vercel.app" 
                learnMore="https://stockverse-your-universe-of-trading.vercel.app"
            />
            <RightSection
                imageURL="media/images/buy.png"  
                featureName="Buy and Sell"  
                featureDescription="Use buy and sell windows to simulate placing orders and experience the trading workflow in a safe demo environment."   
                learnMore="https://stockverse-your-universe-of-trading.vercel.app"
            />
            <div>
                <p className="text-center fs-5 mt-5 border-top"   style={{paddingTop:"40px"}}>Want to know more about our technology stack?<br></br> Check out this medium article : <a href=""  style={{textDecoration:"none", color:'#387ed1', fontWeight:'500'}}> StockVerse </a></p>
                <div className="text-center mb-5">
                    <div className="try-cta mt-4" style={{margin: '0 auto', width: '25%'}}>
                        <a href="https://stockverse-your-universe-of-trading.vercel.app" className="try-link">Try StockVerse</a>
                    </div>
                </div>
            </div>
        </>
    );
}



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// React Props :-
// Props are the imformation that you pass to a JSX tag in the form of attributes(like HTML attributes) just like we pass the arguments in fn in JS.
// SO the information that we pass during component call or component rendering are actually the React Props


