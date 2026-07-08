// Here we are creating this 'Home' component to be used in the dashboard of our application. It will serve as the main entry point for users visiting our dashboard, providing them with an overview of our services and features.



import TopBar from "./TopBar.jsx";
import Dashboard from "./Dashboard.jsx";


export default function Home() {
  return (
    <>
      <TopBar/>
      <Dashboard/>
    </>
  );
}
