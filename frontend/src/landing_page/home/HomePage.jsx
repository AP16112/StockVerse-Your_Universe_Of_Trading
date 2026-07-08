// Here we are creating this 'HomePage' component to be used in the landing page of our application. It will serve as the main entry point for users visiting our website, providing them with an overview of our services and features.
// Inside this component, we will be importing and utilizing other components such as 'HeroSection', 'Stats', 'Pricing', and 'Education' to create a comprehensive landing page experience for our users.


// import Education from "./Education";
// ----------OR------------
import Education from "./Education.jsx";
import HeroSection from "./HeroSection.jsx";
import Pricing from "./Pricing.jsx";
import Stats from "./Stats.jsx";
import OpenAccount from "../OpenAccount.jsx";


export default function HomePage() {
    return ( 
        <>
            <HeroSection/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
    );
}