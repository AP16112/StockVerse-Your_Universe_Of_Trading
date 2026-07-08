// Here we are creating this 'Team' component to be used in the about page of our application. It will provide information about the team member or members and their roles in the project.


export default function Team() {
    return ( 
        <div className="container border-top">
            <div className="row p-4 mt-5">
                <h1 className="text-center">People</h1>
            </div>

            <div className="row p-4 text-muted"  style={{lineHeight:"1.8rem", fontSize:"1.2rem"}}>
                <div className="col-6 p-5 text-center">
                    <img src="media/images/nithinKamath.jpg"  alt="developer image"  style={{borderRadius:"100%", width:"50%"}}></img>
                    <h4 className="mt-5">Arpit Pal</h4>
                    <h6>AI/ML & Full stack Developer</h6>
                </div>

                <div className="col-6 p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                </div>
            </div>
        </div>
    );
}