// Here we are creating this 'LeftSection' component to be used in the products page of our application.


// Here in this 'LeftSection' component, image is on the left side and the text is on the right side.

// Here we are actually using the React Props in this 'LeftSection' component to pass the information from the parent component to this child component. The information that we are passing from the parent component to this child component is actually the React Props. So we can use these React Props in this child component to display the information that we have passed from the parent component.
// One way to use the React Props in this child component is to use the destructuring assignment syntax to extract the values of the React Props from the props object that is passed to this child component. So we can use the destructuring assignment syntax to extract the values of the React Props from the props object that is passed to this child component and then we can use these values in this child component to display the information that we have passed from the parent component.
// And another way to use the React Props in this child component is to use the props object that is passed to this child component and then we can use the dot notation to access the values of the React Props from the props object that is passed to this child component and then we can use these values in this child component to display the information that we have passed from the parent component.
// Here we are using the destructuring assignment syntax to extract the values of the React Props from the props object that is passed to this child component and then we are using these values in this child component to display the information that we have passed from the parent component.
export default function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container">
            <div className="row mt-3 mb-5">
                <div className="col-6 mt-5">
                    {/* Here no need to use "" for the src attribute because we are using the React Props & this imageUrl is a React Prop */}
                    <img src={imageURL} style={{width:"95%"}}  alt="product image"></img>
                </div>

                {/* Here we are using this empty columun to create a width or space of 1 column between both these above and below columns */}
                <div className="col-1"></div>

                <div className="col-5 mt-5 p-5">
                    <h1 className="mb-3 fs-2">{productName}</h1>
                    <p style={{lineHeight:"1.8rem"}}>{productDescription}</p>

                    <div>
                        {/* Here this tryDemo is actually some external URL*/}
                        <a href={tryDemo}  style={{textDecoration:"none", color:'#387ed1', fontWeight:'500'}}> Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore}  style={{textDecoration:"none", color:'#387ed1', fontWeight:'500', marginLeft:"3rem"}}> Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"   className="mb-2"></img></a>
                        <a href={appStore} style={{marginLeft:"1rem"}} ><img src="media/images/appstoreBadge.svg"  className="mb-2"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// React Props :-
// Props are the imformation that you pass to a JSX tag in the form of attributes(like HTML attributes) just like we pass the arguments in fn in JS.
// SO the information that we pass during component call or component rendering are actually the React Props


