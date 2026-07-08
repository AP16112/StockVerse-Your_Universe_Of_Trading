// Here we are creating this Navbar component to be used in the landing page of our application. It will contain links to different sections of the website and provide easy navigation for users. The Navbar will be styled using CSS to ensure it is visually appealing and responsive across different devices.


import "./Navbar.css";


export default function Navbar() {
    return ( 
        <div>
            {/* Here we are creating the Navbar component using Bootstrap actually */}
            <nav className="navbar navbar-expand-lg border-bottom"  style={{backgroundColor:'#fff'}}  >
                <div className="container p-2">
                    <a className="navbar-brand ms-auto" href="#">
                        <img src="media/images/logo.svg"  style={{ width:'25%', height:'auto' }}  alt="Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Signup</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


