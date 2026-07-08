// Here we are creating this NotFound component to be used in our application. 
// This component will be displayed when a user navigates to a route that does not exist in our application.


export default function NotFound() {
  return (
    <div className="container p-5 mb-5 text-center">
        <div className="row text-center">
            <h1 className="mt-5">404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    </div>
  );
}
