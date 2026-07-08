// Here we are creating this 'HeroSection' component to be used in the home page of our application. It will serve as the main section that captures the user's attention and provides an overview of what our application offers. 



export default function HeroSection() {
    return (
        // Here we will bootstrap classes to style our hero section and make it visually appealing. We will use a combination of text, images, and buttons to create an engaging hero section that encourages users to explore our application further.
        // So here we will use like 'container', 'row', 'col', 'btn', 'btn-primary', 'btn-lg', 'text-center', 'text-white', 'bg-dark', 'p-5', 'rounded' etc. classes to style our hero section. 
        // In React, we can use the 'className' attribute instead of 'class' to apply CSS classes to our elements. This is because 'class' is a reserved keyword in JavaScript, and using 'className' avoids any conflicts. So we will use 'className' attribute to apply bootstrap classes to our hero section elements.
        // As here this file is a jsx file, so we can use JSX syntax i.e JavaScript XML to write our react code. In JSX, we can use HTML-like syntax to create our react elements, and we can also use JavaScript expressions inside curly braces {} to dynamically render content. So we will use JSX syntax to create our hero section elements and apply bootstrap classes using 'className' attribute.
        <div className="container p-5 mb-5">
            <div className="row text-center">
                {/* Here this 'public' folder is actually the root folder of our react app, so we can access the images inside 'public' folder using relative path from 'public' folder. So here we will use 'media/images/homeHero.png' to access the image inside 'public/media/images' folder. */}
                {/* It means that React will automatically look for the image in the 'public' folder of our project, and we don't need to specify the full path from the root directory. This is a convenient feature of React that allows us to easily reference static assets like images, fonts, and other files without worrying about the exact file structure of our project. */}
                {/* Here mb-5 means margin-bottom : 5, so we are using bootstrap class 'mb-5' to add margin at the bottom of the image. */}
                <img src="media/images/homeHero.png"   className="mb-5"   alt="Hero Image"/>
                <h1 className="mt-5 fs-2">Grow Your Wealth, All in One Place  </h1>
                <p>Your digital gateway to invest in stocks, mutual funds, ETFs, bonds, derivatives, and beyond.</p>
                {/* To apply inline styles, we can use the 'style' attribute and pass a JavaScript object with CSS properties. But As we know to pass a JavaScript object to the 'style' attribute, we need to use double curly braces {{}} i.e one for the JS object & one for the CSS properties */}
                {/* Here fs means 'font-size' class of bootstrap actually */}
                <button className="p-2 btn btn-primary  fs-5  fw-semibold mt-4" style={{width:"25%", margin:"0 auto", border: 'none', borderRadius: '5px' }}>Sign up Now</button>
            </div>
        </div>
    );
}  

