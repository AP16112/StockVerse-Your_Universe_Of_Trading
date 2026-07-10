//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// StockVerse : "Your Universe of Trading"

// A modern MERN‑powered platform where investing meets simplicity, giving you the tools to explore, trade, and grow in one seamless ecosystem.
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Here we are building the dashboard of our react app.
// It will actually show the main working of this app i.e how we can buy & sell stocks, how we can check our portfolio, how we can check our watchlist, how we can check our orders,etc. all these things will be shown in this dashboard of our react app.

// This app.jsx actually contains the main component i.e app component of react app dashboard
// Now whenever we want to write react code, we do not make any changes to index.html or main.jsx but all the changes we make in this app.jsx file because it contains the main app component.


// Here we will make use of Bootstrap for styling our react app & its components.
// So we will import the bootstrap css file using cdn link in index.html file of our react app.


// Here we will also make use of the Material UI & its components for styling our react app & its components.
// We make use of Material UI icons for the icons in our react app & its components.


// Here we are importing the 'Route' and 'Routes' components from the 'react-router-dom' package. The 'Routes' component is used to define a set of routes in our application, and the 'Route' component is used to define individual routes that map specific URLs to corresponding components. By using these components, we can create a routing structure for our React application, allowing users to navigate between different pages or views based on the URL path.
import {Route, Routes} from 'react-router-dom';

import Home from "./components/Home.jsx";


function App() {

  return (
    <Routes>
      {/* Here we define the route for the home page, so '/*' means that it will match any URL & then render the Home component for that any URL */}
      {/* Here this '*' means any URL e.g /home, /about, /contact */}
      <Route path="/*" element={<Home/>} />
    </Routes>
  )
}

export default App;



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// public folder :-
// It is actually the root folder of our react app, so we can access the images inside 'public' folder using relative path from 'public' folder. So here we will use 'media/images/homeHero.png' to access the image inside 'public/media/images' folder.
// It means that React will automatically look for the image in the 'public' folder of our project, and we don't need to specify the full path from the root directory. This is a convenient feature of React that allows us to easily reference static assets like images, fonts, and other files without worrying about the exact file structure of our project.
// This is a convenient feature of React that allows us to easily reference static assets like images, fonts, and other files without worrying about the exact file structure of our project.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// React Router :-
// React Router is a popular library for handling routing in React applications.
// It allows us to create single-page applications (SPAs) with multiple views or pages without requiring a full page reload. React Router provides a way to manage navigation and rendering of components based on the URL, making it easier to build dynamic and interactive web applications.
// In React Router, we define routes that map specific URLs to corresponding components. When a user navigates to a particular URL, React Router renders the associated component, allowing for seamless transitions between different views within the application.
// React Router provides features like nested routes, route parameters, and programmatic navigation, enabling developers to create complex routing structures and handle user interactions effectively. It is widely used in React applications to enhance user experience and maintain a smooth navigation flow without the need for full page reloads.
// e.g a website with multiple pages like Home, About, Contact, etc. can be built as a single-page application using React Router, where each page is represented by a different component and the URL changes dynamically without reloading the entire page.
// It means when user clicks on a link to navigate to a different page, React Router updates the URL and renders the corresponding component without refreshing the entire page, resulting in a faster and more seamless user experience.

// So, to use it, we need to install it using npm. We can do this by running the following command in our project directory:
// npm install react-router-dom

// After installing React Router, we can import the necessary components from the 'react-router-dom' package and define our routes in the application. We can use the <BrowserRouter> component to wrap our entire application and the <Route> component to define individual routes for different components. We can also use the <Link> component to create navigation links that allow users to navigate between different routes without triggering a full page reload.

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// React Props :-
// Props are the imformation that you pass to a JSX tag in the form of attributes(like HTML attributes) just like we pass the arguments in fn in JS.
// SO the information that we pass during component call or component rendering are actually the React Props

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

//-------------------------------------------------------------------------------------------------------------------
// Material UI :-
// It is a library of React UI components just like bootstrap for CSS.
// SO this material Ui is similar to bootstrap actually
// It give pre-built proper React Ui components to us.

// Material UI is an open-source React component library that implements Google's Material Design.
// It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

// We can use this as cdn also or we can install it also.
// We will actually use the installation method.

// So to install it, we can use this :- 
// npm install @mui/material @emotion/react @emotion/styled

// In Material UI, we have two types of styling engines :-
// - Emotion   (it is strongly preferred)
// - styled-components 

// Material UI uses Emotion as its default styling engine. 
// If you want to use styled-components instead, run one of the following commands:
// npm install @mui/material @mui/styled-engine-sc styled-components

// Material UI uses the Roboto font by default. 
// Add it to your project via Fontsource, or with the Google Fonts CDN.
// npm install @fontsource/roboto   ---> here we will use this way
// Then you can import it in your entry point (i.e in the files in which we want to use them) like this:
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// Or we can use Cdn link 


// To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font. You can do so with npm, or with the Google Web Fonts CDN.
// npm install @mui/icons-material

// Now to use the Material UI icons directly without even installing Material UI, we can  use it using this npm link :-
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

// SO it will install the Material UI icons & also the Material UI & its dependencies. So we can use the Material UI icons directly without even installing Material UI.


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// useEffect() :-
// It is also an Hook in React.
// The Effect Hook lets you perform side effects in function components

// When our component is rendered first time, or whenever our component is rebdered  and we want to perform some task, then we can make use of useEffect hook.
// e.g when our state variable is changing , then it means that our component gets re-renders & if before rendering we want to perform some task, then we can do that using this useEffect() hook

// Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

// Side effects are things that happen outside the normal rendering flow, such as:-
// Fetching data from an API
// Subscribing/unsubscribing to events
// Updating the DOM manually
// Setting timers

// So we can pass some function inside useEffect like :-
// useEffect( function )
// Now whenever any changes happens in state, then this functions gets executed actually.
// SO this function is actually a side-effect here
// e.g useEffect(function printSomething() {
//     console.log("This is a side-effect");
// });

// Now we can also pass the dependencies inside this useEffect along with setup( i.e some function):-
// useEffect(setup, dependencies);
// These dependencies are nothing but our state variables.

// setup (the first argument) :-
// This is the function where you put your side effect logic.
// Example: fetching data, setting up a timer, subscribing to an event.
// It can also return a cleanup function to undo the effect when the component unmounts or before the effect re-runs.

// dependencies (the second argument) :-
// This is an array of values that React watches.
// The effect runs again whenever any of these values change.
// It controls when the effect executes.

// Examples: Empty array [] → run only once after initial render.
// No array → run after every render.
// Specific values [count] → run after initial render and whenever count changes.


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Real Life Use Cases of useEffect() :-
// e.g during 1st time rendering, before rendering our app is fetching some data from database which will take some time
// And during that time, we want that some loader must appear on screen, so we can use this useEffect to show loader using some function before our 1st time rendering.

// Similarly, we have soo many real life use cases of this useEffect which are given in React documentation.

// One of the use case is :-
// API Calls - Asynchronous Operations :-
// Asynchronous Operations like fetching data from DB or from mapbox or we are using google APIs etc.

// So here we will create this Joker component which will print some joke & in that we will use API calls & look for how useEffect will be used in that.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Chart.js :-
// Chart.js is a JavaScript charting library that lets you create interactive, responsive charts using HTML5 <canvas>.
// Supports many chart types: line, bar, pie, doughnut, radar, polar area, bubble, scatter, etc.
// Highly customizable (colors, labels, tooltips, animations).
// Lightweight and easy to use.

// But here we will use this 'react-chartjs-2' which is a React components for Chart.js, the most popular charting library.

// react-chartjs-2 :-
// react-chartjs-2 is a React wrapper around Chart.js.
// Since Chart.js is vanilla JS, it doesn’t integrate directly with React’s component system.
// react-chartjs-2 bridges that gap, letting you use Chart.js charts as React components.
// Provides React components like <Line />, <Bar />, <Pie />, etc.
// Works seamlessly with React state and props.
// Makes charts declarative (you describe them in JSX instead of manually initializing with new Chart()).

// But to use this react-chartjs-2, we firstly need to install this :-
// npm install chart.js react-chartjs-2

