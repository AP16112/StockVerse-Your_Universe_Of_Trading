// Here we are creating this Navbar component to be used in the landing page of our application. It will contain links to different sections of the website and provide easy navigation for users. The Navbar will be styled using CSS to ensure it is visually appealing and responsive across different devices.


import "./Navbar.css";

// Now as here we are using 'React-Router' to navigate between different pages of our application, we will use the 'Link' component from the 'react-router-dom' package to create links in our Navbar. The 'Link' component allows us to navigate to different routes defined in our application without causing a full page reload, providing a smooth user experience. We will import the 'Link' component and use it to create navigation links in our Navbar.
import { Link } from 'react-router-dom';
// So instead of using <a> tag to create links in our Navbar, we will use the <Link> component from 'react-router-dom' package. The 'to' attribute of the <Link> component will be used to specify the target route for navigation. When a user clicks on a link, React Router will handle the navigation and render the corresponding component without refreshing the entire page.


export default function Navbar() {
    return ( 
        <div>
            {/* Here we are creating the Navbar component using Bootstrap actually */}
            <nav className="navbar navbar-expand-lg border-bottom"  style={{backgroundColor:'#fff'}}  >
                <div className="container p-2">
                    <Link className="navbar-brand" to="/">
                            <img src="media/images/logo.png"  style={{height:"40px", width:"auto"}}  alt="Logo" />
                    </Link>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">            
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/features">Features</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/support">Support</Link>
                            </li>

                        </ul>
                    </div>

                    
                </div>
            </nav>
        </div>
    );
}