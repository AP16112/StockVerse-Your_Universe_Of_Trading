// Here we are creating this 'HeroSection' component to be used in the about page of our application. It will serve as the main section that captures the user's attention and provides an overview of what our about page of our application offers. 


export default function HeroSection() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2 text-center">StockVerse - a learning demo for trading stocks & flows</h1>
            </div>

            <div className="row p-5 mt-5 text-muted border-top"  style={{lineHeight:"1.8rem", fontSize:"1.1rem"}}>
                <div className="col-6 p-5">
                    <p>
                        StockVerse is a student-built learning webapp inspired by real trading platforms (for example, Zerodha). It demonstrates user interfaces, simulated data flows, and common trading workflows for education and prototyping.
                    </p>
                    <p>
                        This project is not a live brokerage and is not affiliated with any financial institution. Do not use StockVerse with real funds — it is intended for experimentation and learning only.
                    </p>
                    <p>
                        The codebase is useful for students, designers, and developers who want to study how trading apps are built.
                    </p>
                </div>

                <div className="col-6 p-5">
                    <p>
                        The site includes sample datasets, demo flows, and educational notes to help you explore product design and technical patterns used by trading platforms.
                    </p>
                    <p>
                        For full details, see the <a href="" style={{ textDecoration: "none", color:'#387ed1' }}>project codes</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}


