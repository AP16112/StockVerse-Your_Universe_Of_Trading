// Here we are creating this 'HeroSection' component to be used in the features section of our application. It serves as the main section that captures the user's attention and provides an overview of what our features offer.


export default function HeroSection() {
    return ( 
        <div className="container mb-5 border-bottom">
            <div className="text-center mt-5 p-5">
                <h1>Features</h1>
                <h3 className="text-muted mt-3 fs-4">A learning-first trading webapp inspired by modern broker platforms</h3>
                <p className="mt-2 mb-4">Check out <a href="https://stockverse-your-universe-of-trading.vercel.app"  style={{textDecoration:"none", color:'#387ed1', fontWeight:'500'}} > StockVerse <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

