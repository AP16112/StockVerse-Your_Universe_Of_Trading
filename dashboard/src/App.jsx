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


// Here we are importing the 'Route' and 'Routes' components from the 'react-router-dom' package. The 'Routes' component is used to define a set of routes in our application, and the 'Route' component is used to define individual routes that map specific URLs to corresponding components. By using these components, we can create a routing structure for our React application, allowing users to navigate between different pages or views based on the URL path.
import {Route, Routes} from 'react-router-dom';

import Home from "./components/Home.jsx";


function App() {

  return (
    <Routes>
      {/* Here we define the route for the home page, so '/*' means that it will match any URL & then render the Home component for that any URL */}
      <Route path="/*" element={<Home/>} />
    </Routes>
  )
}

export default App



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
