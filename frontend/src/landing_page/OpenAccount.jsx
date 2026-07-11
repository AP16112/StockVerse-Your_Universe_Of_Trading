// Here we are creating this 'OpenAccount' component to be used in our application. It will provide users with the option to open a new account and get started with our services.


import { Link } from 'react-router-dom';

export default function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5 border-top">
            <div className="row text-center">
                <h1 className="mt-5 fs-2">Dive into StockVerse</h1>
                <p>Modern platforms with simple investing in stocks.</p>
                {/* To apply inline styles, we can use the 'style' attribute and pass a JavaScript object with CSS properties. But As we know to pass a JavaScript object to the 'style' attribute, we need to use double curly braces {{}} i.e one for the JS object & one for the CSS properties */}
                <div className="try-cta mt-4" style={{margin: '0 auto', width: '25%'}}>
                    <a href="https://stockverse-your-universe-of-trading.vercel.app" className="try-link">Try StockVerse</a>
                </div>
            </div>
        </div>
    );
}

