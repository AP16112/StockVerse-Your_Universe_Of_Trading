// Here we are creating this 'Pricing' component to be used in the landing page of our application.


export default function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-5">
                    <h1 className="mb-3 fs-2">Free demo - learning webapp</h1>
                    <p>This project is a free, educational webapp built to demonstrate trading UI and workflows. It is not a live broker and is intended for learning and experimentation only.</p>
                    <p className="text-muted" style={{fontSize:'0.9rem'}}>Not affiliated with any brokerage. Do not use with real funds.</p>
                </div>

                {/* Here we are using this div which takes width of 2 columns, to create some spacing between column both these above and below columns */}
                <div className="col-1"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col-6 p-3 border">
                            <h1 className="mb-3"><i class="fa-solid fa-indian-rupee-sign"  style={{fontSize:'2.2rem'}}></i>0</h1>
                            <p>Free Webapp</p>
                        </div>
                        <div className="col-6 p-3 border">
                            <h1 className="mb-3"><i class="fa-solid fa-indian-rupee-sign" style={{fontSize:'2.2rem'}}></i>0</h1>
                            <p className="mb-5">Only for demo purpose</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

