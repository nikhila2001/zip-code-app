import { useContext } from "react";
import { ZipCodeContext } from "../context/ZipCodeContext";

function LocationInfo() {
  // Access data and functions from the ZipCodeContext using useContext
  const { locationInfo, isLoading, error, clearLocationInfo } =
    useContext(ZipCodeContext);

  return (
    <>
      <div className="text-secondary fw-bold">
        {isLoading && (
          // Display a loading indicator when isLoading is true
          <div className="loader">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
        {/* Display an error message when there's an error */}
        {error && (
          <p
            className="text-danger border rounded border-danger p-1 my-2"
            style={{ backgroundColor: "lightPink" }}
          >
            Error: {error}
          </p>
        )}
        {locationInfo && (
          // Check if locationInfo is available and render its content
          <>
            <p>Postal Code: {locationInfo.postal_code}</p>
            <p>City: {locationInfo.city}</p>
            <p>State: {locationInfo.state}</p>
            <p>Country Code: {locationInfo.country_code}</p>
            <p>Latitude: {locationInfo.latitude}</p>
            <p>Longitude: {locationInfo.longitude}</p>
            {/* Render a "CLEAR" button to clear location information */}
            <button
              onClick={clearLocationInfo}
              className="bg-warning border-0 p-1 rounded w-100 fw-bold"
            >
              CLEAR
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default LocationInfo;
