// Here we are creating this 'HeroSection' component to be used in the home page of our application. It will serve as the main section that captures the user's attention and provides an overview of what our application offers. 



import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        // Here we will bootstrap classes to style our hero section and make it visually appealing. We will use a combination of text, images, and buttons to create an engaging hero section that encourages users to explore our application further.
        // So here we will use like 'container', 'row', 'col', 'btn', 'btn-primary', 'btn-lg', 'text-center', 'text-white', 'bg-dark', 'p-5', 'rounded' etc. classes to style our hero section. 
        // In React, we can use the 'className' attribute instead of 'class' to apply CSS classes to our elements. This is because 'class' is a reserved keyword in JavaScript, and using 'className' avoids any conflicts. So we will use 'className' attribute to apply bootstrap classes to our hero section elements.
        // As here this file is a jsx file, so we can use JSX syntax i.e JavaScript XML to write our react code. In JSX, we can use HTML-like syntax to create our react elements, and we can also use JavaScript expressions inside curly braces {} to dynamically render content. So we will use JSX syntax to create our hero section elements and apply bootstrap classes using 'className' attribute.
        <div className="container p-5 mb-5">
            <div className="row justify-content-center text-center">
                <div className="col-lg-8">
                    <img
                        src="media/images/homeHero.png"
                        className="img-fluid mb-5 mx-auto d-block"
                        alt="StockVerse hero"
                        style={{maxWidth: '640px', width: '100%'}}
                    />
                    <h1 className="mt-5 pt-4 fs-2 ">Grow Your Wealth, All in One Place</h1>
                    <p className="mb-4 fs-5">StockVerse - simple investing in stocks.</p>
                    <div className="try-cta mt-4 mx-auto" style={{maxWidth: '240px'}}>
                        <a href="https://stockverse-your-universe-of-trading.vercel.app" className="try-link">Try StockVerse</a>
                    </div>
                </div>
            </div>
        </div>
    );
}  

