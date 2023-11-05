import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const ZipCodeContext = createContext(); // Create a new context for Zip Code information

const ZipCodeProvider = ({ children }) => {
  // Define the state variables to store location information, loading state, and errors
  const [locationInfo, setLocationInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async (postalCode) => {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      // Make an API request to fetch location information
      const response = await axios.get(
        "https://zipcodebase-zip-code-search.p.rapidapi.com/search",
        {
          params: { codes: postalCode },
          headers: {
            "X-RapidAPI-Key":
              "ca2cd703e6mshc63cac455db0540p140975jsn7e7a94f94802",
            "X-RapidAPI-Host": "zipcodebase-zip-code-search.p.rapidapi.com",
          },
        }
      );
      const data = response.data;
      // check if there are results for the given postal code
      if (data.results && data.results[postalCode]) {
        const locationInfo = data.results[postalCode][0];
        setLocationInfo(locationInfo);
      } else {
        setError("No location information found for the provided postal code.");
      }
    } catch (err) {
      setError("An error occured while fetching location information");
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  const clearLocationInfo = () => {
    setLocationInfo(null); // Clear the location information
  };

  return (
    <ZipCodeContext.Provider
      value={{
        locationInfo,
        isLoading,
        error,
        fetchLocationInfo,
        clearLocationInfo,
      }}
    >
      {children}{" "}
      {/* Render the child components wrapped in the context provider */}
    </ZipCodeContext.Provider>
  );
};

export default ZipCodeProvider;
