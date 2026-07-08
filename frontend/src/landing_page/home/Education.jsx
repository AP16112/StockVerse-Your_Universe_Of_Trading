// Here we are creating this 'Education' component to be used in the landing page of our application. It will provide educational resources and information to users.

export default function Education() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg"  style={{width:"70%"}}></img>
                </div>
                <div className="col-6">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=""  style={{textDecoration:"none", color:'#387ed1', fontWeight:'500'}}  >Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    
                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=""  style={{textDecoration:"none", color:'#387ed1', fontWeight:'500'}}  >TradingQ&A <i class="fa-solid fa-arrow-right"></i></a> 
                </div>
            </div>
        </div>
    );
}



