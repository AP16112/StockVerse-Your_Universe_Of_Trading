import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// Here we are importing the 'BrowserRouter' component from the 'react-router-dom' package. The 'BrowserRouter' component is a higher-order component that provides the routing functionality for our React application. It uses the HTML5 history API to keep the UI in sync with the URL, allowing us to navigate between different routes without triggering a full page reload. By wrapping our entire application with the 'BrowserRouter', we enable the use of React Router's features, such as defining routes and rendering specific components based on the URL path.
import { BrowserRouter } from 'react-router-dom';

import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* As we need Navbar & Footer on all pages, so that's why we are importing them here so that they are visible on all pages */}
      <Navbar/>
      <div className="site-content" style={{ flex: 1 }}>
        <App />
      </div>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)





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


