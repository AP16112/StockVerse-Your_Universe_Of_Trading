// Here we are creating this 'HeroSection' component to be used in the products page of our application. It will serve as the main section that captures the user's attention and provides an overview of what our products page offers. 


export default function HeroSection() {
    return ( 
        <div className="container mb-5 border-bottom">
            <div className="text-center mt-5 p-5">
                <h1>Technology</h1>
                <h3 className="text-muted mt-3 fs-4">Sleek, modern and intuitive trading platform</h3>
                <p className="mt-2 mb-4">Check out our <a href=""  style={{textDecoration:"none", color:'#387ed1', fontWeight:'500'}} > investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

