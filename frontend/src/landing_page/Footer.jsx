// Here we are creating this 'Footer' component to be used in our application. It will provide users with important links and information about our application, such as contact details, social media links, and other relevant resources. 


import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer border-top" style={{ backgroundColor: '#f8f9fa'}}>
            <div className="container py-4 d-flex justify-content-center">
                <div className="footer-center text-center">
                    <div className="f-info-logo mb-2">
                        <img src="media/images/logo.png" alt="StockVerse" className="fv-logo" />
                    </div>

                    <div className="f-info-brand mb-2">&copy; StockVerse Private Limited</div>

                    <div className="f-info-socials">
                        <a href="https://www.instagram.com/arpit_p_07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/arpitpal0711/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-square-linkedin"></i>
                        </a>
                        <a href="https://github.com/AP16112" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-square-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

