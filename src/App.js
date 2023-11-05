import ZipCodeForm from "./components/ZipCodeForm"; // Import the component for entering postal codes
import LocationInfo from "./components/LocationInfo"; // Import the component for displaying location information
import ZipCodeProvider from "./context/ZipCodeContext"; // Import the context provider
import "./App.css"; // Import your app's CSS styles

function App() {
  return (
    // rendering the UI of the APP
    <div className="App wrapper">
      <>
        {/* title of the app */}
        <h1 className="text-secondary mb-4 fs-3">
          ZipSight: Explore Locations by Postal Code
        </h1>
        {/* ZipCodeProvider to provide state and functions to child components */}
        <ZipCodeProvider>
          {/* Render the ZipCodeForm component to enter postal codes */}
          <ZipCodeForm />
          {/* Render the LocationInfo component to display location information */}
          <LocationInfo />
        </ZipCodeProvider>
      </>
    </div>
  );
}

export default App;
