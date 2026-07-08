// Here we are creating this 'Orders' component to be used in the dashboard of our application.


import { Link } from "react-router-dom";    

export default function Orders() {
  return (
    <div className="orders">
        <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn"> Get started </Link>
        </div>
    </div>
  );
}