// Here we are creating this 'AboutPage' component to be used in the about page of our application. It will serve as the main entry point for users visiting our about page, providing them with an overview of our Project.

// import React from 'react';
import HeroSection from "./HeroSection.jsx";
import TrustSection from "./TrustSection.jsx";
import Team from "./Team.jsx";


function AboutPage() {
    return ( 
        <>
            <HeroSection/>
            <TrustSection/>
            <Team/>
        </>
    );
}

export default AboutPage;


