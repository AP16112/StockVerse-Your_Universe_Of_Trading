// Here we are creating this 'OpenAccount' component to be used in our application. It will provide users with the option to open a new account and get started with our services.


export default function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 fs-2">Open a StockVerse account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                {/* To apply inline styles, we can use the 'style' attribute and pass a JavaScript object with CSS properties. But As we know to pass a JavaScript object to the 'style' attribute, we need to use double curly braces {{}} i.e one for the JS object & one for the CSS properties */}
                <button className="p-2 btn btn-primary  fs-5  fw-semibold mt-4" style={{width:"25%", margin:"0 auto", border: 'none', borderRadius: '5px' }}>Sign up Now</button>
            </div>
        </div>
    );
}