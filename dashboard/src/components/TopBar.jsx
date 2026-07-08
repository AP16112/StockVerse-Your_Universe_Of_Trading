// Here we are creating this 'TopBar' component to be used in the dashboard of our application.


// SO this TopBar component will be used to show the top bar of our dashboard. It will be used to show the NIFTY 50 and SENSEX indices and also the menu of our dashboard.
// It will act as navigation bar for our dashboard. It will be used to navigate to different sections of our dashboard. It will be used to show the NIFTY 50 and SENSEX indices and also the menu of our dashboard.

import Menu from "./Menu.jsx";


export default function TopBar() {
  return (
    <div className="topbar-container">
        <div className="indices-container">
            <div className="nifty">
                <p className="index">NIFTY 50</p>
                <p className="index-points">{100.2} </p>
                <p className="percent"> </p>
            </div>
            <div className="sensex">
                <p className="index">SENSEX</p>
                <p className="index-points">{100.2}</p>
                <p className="percent"></p>
            </div>
        </div>

        <Menu />
    </div>
  );
}