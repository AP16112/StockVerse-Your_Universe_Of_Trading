// Here we are creating this 'ProductsPage' component to be used in the products page of our application. It will serve as the main entry point for users visiting our products page, providing them with an overview of what our products page offers.

import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import HeroSection from "./HeroSection.jsx";


export default function ProductsPage() {
    return ( 
        <>
            <HeroSection/>
            <LeftSection  
                imageURL="media/images/kite.png"  
                productName="Kite"  
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  
                tryDemo=""  
                learnMore=""  
                googlePlay=""  
                appStore="" 
            />
            <RightSection
                imageURL="media/images/console.png"  
                productName="Console"  
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."   
                learnMore=""  
            />
            <LeftSection  
                imageURL="media/images/coin.png"  
                productName="Coin"  
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."  
                tryDemo=""  
                learnMore=""  
                googlePlay=""  
                appStore="" 
            />
            <RightSection
                imageURL="media/images/kiteconnect.png"  
                productName="Kite Connect API"  
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."   
                learnMore=""  
            />
            <LeftSection  
                imageURL="media/images/varsity.png"  
                productName="Varsity mobile"  
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  
                tryDemo=""  
                learnMore=""  
                googlePlay=""  
                appStore="" 
            />
            <p className="text-center fs-5 mt-5">Want to know more about our technology stack?<br></br> Check out this medium article : <a href=""  style={{textDecoration:"none", color:'#387ed1', fontWeight:'500'}}> StockVerse </a></p>
            <div className="text-center mb-5">
                <button className="p-2 btn btn-primary text-center  fs-5  fw-semibold mt-4" style={{width:"25%", margin:"0 auto", border: 'none', borderRadius: '5px' }}>Sign up Now</button>
            </div>
        </>
    );
}



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// React Props :-
// Props are the imformation that you pass to a JSX tag in the form of attributes(like HTML attributes) just like we pass the arguments in fn in JS.
// SO the information that we pass during component call or component rendering are actually the React Props


