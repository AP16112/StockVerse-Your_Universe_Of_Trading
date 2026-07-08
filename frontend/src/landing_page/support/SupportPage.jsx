// Here we are creating this 'SupportPage' component to be used in the support page of our application. It will serve as the main entry point for users visiting our support page, providing them with an overview of what our support page offers.

import CreateTicket from "./CreateTicket.jsx";
import HeroSection from "./HeroSection.jsx";


export default function SupportPage() {
    return ( 
        <>
            <HeroSection/>
            <CreateTicket/>
        </>
    );
}

