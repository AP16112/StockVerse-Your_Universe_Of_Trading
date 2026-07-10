// Here we are creating this 'HeroSection' component to be used in the support page of our application. It will serve as the main section that captures the user's attention and provides an overview of what our support page offers. 


import "./HeroSection.css";


export default function HeroSection() {
    return ( 
        // Here we are not going to use container class of bootstrap because we want this section to be full width as in bootstrap container class has a max-width of 1140px and we want this section to be full width of the screen.
        // SO here either we can use container-fluid class of bootstrap or we can use section tag and give it a class of 'container-fluid' which will make this section full width of the screen.
        // So we will use section tag and give it a class of 'container-fluid' which will make this section full width of the screen.
        <section className="container-fluid" id="supportHeroSection">
            <div className="support-hero-inner">
                <div className="support-hero-content text-center">
                    <h1>StockVerse Support</h1>
                    <h1 className="fs-3">Need help with the demo dashboard or simulated trading workflow?</h1>
                    <p className="support-hero-text">
                        StockVerse is designed as a demo learning platform, so support team can help you understand the app, practice simulated trades, and navigate landing page features. If you run into any issue while exploring the dashboard, watchlist, or order flows, we are here to help.
                    </p>

                    <div className="support-search mb-4">
                        <input className="support-search-input" placeholder="Eg. how do I place a buy order" />
                    </div>

                    <div className="support-links mb-4">
                        <a className="support-link" href="">How to use WatchList</a>
                        <a className="support-link" href="">Understand Holdings</a>
                        <a className="support-link" href="">Simulated order flow</a>
                        <a className="support-link" href="">Dashboard summary guide</a>
                    </div>

                    <div className="support-contact">
                        For all these issues, try contacting <strong>arpitpal16112@gmail.com</strong> or call <strong>94XXXXXXX</strong>.
                    </div>
                </div>
            </div>
        </section>
    );
}

