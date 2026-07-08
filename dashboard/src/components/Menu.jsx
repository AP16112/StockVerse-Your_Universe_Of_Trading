// Here we are creating this 'Menu' component to be used in the dashboard of our application.


import { useState } from "react";
import { Link } from "react-router-dom";


export default function Menu() {
    // Here we are creating a state variable called 'selectedMenu' using the useState hook. The initial value of this state variable is set to 0. This state variable will be used to keep track of which menu item is currently selected by the user. When a user clicks on a menu item, we will update this state variable to reflect the selected menu item, allowing us to apply different styles or perform other actions based on the user's selection.
    // SO here '0' means the first selected menu item is 'Dashboard' and if user clicks on 'Orders', then we will set this state variable to '1' and so on for other menu items.
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);


    let handleMenuCLick = (index) => {
        setSelectedMenu(index);
    }


    let handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const menuClass = "menu";
    const activeMenuClass = "menu selected";


    return (
        <div className="menu-container">
            {/* Here it will automatically look for the image in the 'public' folder */}
            <img src="logo.png" style={{ width: "50px" }} />

            <div className="menus">
                <ul>
                    <li>
                        {/* Here we will not use onClick={handleMenuCLick(0)} because it would call the function immediately when the component renders */}
                        {/* handleMenuCLick(0) runs right away when React renders the component. The result of that function call (likely undefined) is what gets assigned to onClick.
                        So when you actually click the button, nothing happens — the function already ran during render. */}
                        {/* So we need to make use of arrow fn here  */}
                        <Link style={{ textDecoration: "none"}} to="/"  onClick={() => handleMenuCLick(0)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                        {/* SO when user clicks on 'Dashboard', the 'selectedMenu' state will be updated to 0 & the component will re-render & due to which the active styling will be applied */}
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/orders"  onClick={() => handleMenuCLick(1)}>
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/holdings"  onClick={() => handleMenuCLick(2)}>
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/positions"  onClick={() => handleMenuCLick(3)}>
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/funds"  onClick={() => handleMenuCLick(4)}>
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                </div>
            </div>
        </div>
    );
}



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// State in React :-
// The State is a built-in React object that is used to contain data or information about the component.
// A component's state can change over time; whenever it changes, the component re-renders.

// SO when we want to re-renders the components, we make use of state.

// so for normal variables or props (which are immutable) if they changes, they don't re-renders the component, so those changes won't be visible in UI
// Normal variables: If you declare something like let count = 0, React will render it once. Updating that variable later doesn’t trigger a re-render, so the UI won’t reflect the change. React has no way of knowing that the variable changed.
// Props: Props are immutable by design. A component re-renders only if its parent re-renders and passes new props down. You can’t directly “mutate” props inside a child component to cause a re-render.

// So component only re-renders if changes occurs in state which is a object 

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Hooks :-
// Hooks were a new addition in React 16.8.
// They let you use state and other React features without writing a class.
// There are currently 15 hooks in react.
// e.g useState() is one of the hook.

// So hook is a function that helps to deal with states.

// React Hooks are special functions that let you use React features (like state, lifecycle methods, and context) inside functional components, without needing class components. They make components more powerful, reusable, and easier to manage.

// What Hooks Do :-
// Enable state in functional components (useState, useReducer).
// Handle side effects like data fetching or subscriptions (useEffect).
// Access context values without prop drilling (useContext).
// Work with DOM elements or mutable values (useRef).
// Optimize performance (useMemo, useCallback).
// Provide advanced features like transitions (useTransition) or custom hooks.

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// useState() :-
// useState is a React Hook that lets you add a state variable to your component.
// state variable means those variable in which when any changes occurs, then component needs to re-renders.
// e.g const [state, setState] = useState(initialState);

// So to use useState, we need to pass a initila value.
// e.g here if we want counter to be state variable, then initialState will be its initial value i.e 0

// useState returns an array with exactly two values :-
// 1. The current state. During the first render, it will match the initialState you have passed.
// 2. The set function that lets you update the state to a different value and trigger a re-render.

// This setState method is also called as updater function as it updates the state variable.

// initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

// We can only create the state variable inside some component & not outside it.
// If we want we can also create multiple state variables inside the same component also.
