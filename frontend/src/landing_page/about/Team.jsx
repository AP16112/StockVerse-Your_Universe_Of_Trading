// Here we are creating this 'Team' component to be used in the about page of our application. It will provide information about the team member or members and their roles in the project.


export default function Team() {
    return ( 
        <div className="container border-top">
            <div className="row p-4 mt-5">
                <h1 className="text-center">People</h1>
            </div>

            <div className="row p-4 text-muted"  style={{lineHeight:"1.8rem", fontSize:"1.2rem"}}>
                <div className="col-6 p-5 text-center">
                    <img src="media/images/profile.jpg"  alt="developer image"  style={{borderRadius:"100%", width:"50%"}}></img>
                    <h4 className="mt-5">Arpit Pal</h4>
                    <h6>AI/ML & Full stack Developer</h6>
                </div>

                <div className="col-6 p-5">
                    <p>
                        StockVerse is developed as a learning and demo webapp by me. My goal is to show how trading user experiences are designed, not to operate as a real brokerage.
                    </p>
                    <p>
                        I combine web engineering, design, and market data concepts to build a practical platform for studying trading app workflows.
                    </p>
                    <p>
                        I also made it functional to simulate real life trading platforms.
                    </p>
                </div>
            </div>
        </div>
    );
}


