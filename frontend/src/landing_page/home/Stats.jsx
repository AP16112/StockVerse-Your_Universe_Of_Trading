    // Here we are creating this 'Stats' component to be used in the landing page of our application. It will display various statistics related to our application. 


    export default function Stats() {
        return ( 
            // Here we will bootstrap classes to style our hero section and make it visually appealing. We will use a combination of text, images, and buttons to create an engaging hero section that encourages users to explore our application further.
            // So here we will use like 'container', 'row', 'col', 'btn', 'btn-primary', 'btn-lg', 'text-center', 'text-white', 'bg-dark', 'p-5', 'rounded' etc. classes to style our hero section. 
            // In React, we can use the 'className' attribute instead of 'class' to apply CSS classes to our elements. This is because 'class' is a reserved keyword in JavaScript, and using 'className' avoids any conflicts. So we will use 'className' attribute to apply bootstrap classes to our hero section elements.
            // As here this file is a jsx file, so we can use JSX syntax i.e JavaScript XML to write our react code. In JSX, we can use HTML-like syntax to create our react elements, and we can also use JavaScript expressions inside curly braces {} to dynamically render content. So we will use JSX syntax to create our hero section elements and apply bootstrap classes using 'className' attribute.
            <div className="container px-2 pt-3 pb-3 mb-5">
                <div className="row pt-5 pb-5">
                    <div className="col-6 p-5">
                        {/* Here fs-2 means that we are setting the font size to 2 for this h1 heading */}
                        <h1 className="fs-2 mb-5">Trust with confidence</h1>
                        <h2 className="fs-4">Customer-first always</h2>
                        {/* here this 'text-muted' class is used to style the paragraph text i.e it makes the text color lighter */}
                        <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                        <h2 className="fs-4">No spam or gimmicks</h2>
                        <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                        <h2 className="fs-4">The Zerodha universe</h2>
                        <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                        <h2 className="fs-4">Do better with money</h2>
                        <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    <div className="col-6 p-5">
                        {/* To embed a JavaScript object inside JSX, you need curly braces {}. Since the style itself is an object, we end up with two sets of braces:
                        The outer {} tells JSX: "this is a JavaScript expression."
                        The inner {} defines the actual object with key-value pairs. */}
                        <img src="media/images/ecosystem.png" style={{width:'100%'}} ></img>

                        <div className="text-center">
                            {/* Here class 'mx-5' means margin along horizontal axis i.e margin-left: 1.25rem and margin-right: 1.25rem.*/}
                            <a href="" className="mx-5"  style={{textDecoration:"none", display:'inline-flex', justifyContent:'center', alignItems:'center', color:'#387ed1', fontWeight:'500'}}  >Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            <a href="" className="mx-5"  style={{textDecoration:"none", display:'inline-flex', justifyContent:'center', alignItems:'center', color:'#387ed1', fontWeight:'500'}}  >Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }




    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // How to handle links in React :-
    // In React, the way we handle links depends on whether we are working with regular external links or internal navigation (routing):
    // External Links :-
    // For links that go outside our app (like to Google or GitHub), you just use the normal HTML <a> tag inside JSX.

    //Internal Links (Single Page Apps with React Router) :-
    // If we’re using React Router, we don’t use <a> because that would reload the page. Instead, we use the <Link> component:
    // import { Link } from "react-router-dom";
    //<Link to="/about">Go to About Page</Link>  

    // So, this 'to' works like href, but it tells React Router to change the route without refreshing.
    // This keeps your app fast and smooth.

    