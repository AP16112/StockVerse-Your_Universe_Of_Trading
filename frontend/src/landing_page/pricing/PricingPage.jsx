// Here we are creating this 'PricingPage' component to be used in the pricing page of our application. It will serve as the main entry point for users visiting our pricing page, providing them with an overview of what our pricing page offers.


import HeroSection from "./HeroSection.jsx";
import Brokerage from "./Brokerage.jsx";
import OpenAccount from "../OpenAccount.jsx";


export default function PricingPage() {
    return ( 
        <>
            <HeroSection/>
            <OpenAccount/>
            <Brokerage/>
        </>
    );
}