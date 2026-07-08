// Here we are creating this 'HeroSection' component to be used in the support page of our application. It will serve as the main section that captures the user's attention and provides an overview of what our support page offers. 


import "./HeroSection.css";


export default function HeroSection() {
    return ( 
        // Here we are not going to use container class of bootstrap because we want this section to be full width as in bootstrap container class has a max-width of 1140px and we want this section to be full width of the screen.
        // SO here either we can use container-fluid class of bootstrap or we can use section tag and give it a class of 'container-fluid' which will make this section full width of the screen.
        // So we will use section tag and give it a class of 'container-fluid' which will make this section full width of the screen.
        <section className="container-fluid" id="supportHeroSection">
            <div className="p-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>

            <div className="row p-5 m-3">
                <div className="col-6 p-3">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    
                    <input placeholder="Eg. how do I activate F&O" />
                    <br></br>
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>

                <div className="col-6 p-3">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

