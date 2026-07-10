// Here we are creating this 'HeroSection' component to be used in the pricing page of our application. It will serve as the main section that captures the user's attention and provides an overview of what our pricing page offers. 


export default function HeroSection() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h3 className="text-muted mt-3 fs-5">StockVerse is a simulated trading playground built for learning - no live money, no real brokerage, only practice.</h3>
            </div>

            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-4">
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className="fs-3">Paper trading experience</h1>
                    <p className="text-muted">Practice equity, intraday, and F&O-style trades with sample data to build confidence before you trade for real.</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className="fs-3">Zero real charges</h1>
                    <p className="text-muted">This demo app does not execute real orders, so there are no brokerage fees, DP charges, or market risk on your account.</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className="fs-3">Learning-first design</h1>
                    <p className="text-muted">Use the dashboard to explore watchlists, holdings, positions, orders, and summary metrics in a teaching-friendly environment.</p>
                </div>
            </div>
        </div>
    );
}

