import { useContext, useState } from "react";
import { ZipCodeContext } from "../context/ZipCodeContext";
import { Search } from "react-bootstrap-icons";

function ZipCodeForm() {
  const { fetchLocationInfo } = useContext(ZipCodeContext); // Access the fetchLocationInfo function from the context
  const [postalCode, setPostalCode] = useState(""); // Initialize a state variable for postal code input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    fetchLocationInfo(postalCode); // Call the fetchLocationInfo function with the entered postal code
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {/* postal code input form */}
          <div className="input-group mb-3 rounded field">
            <input
              type="text"
              className=" input-field form-control fs-5"
              placeholder="Enter Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            {/* Add a search button */}
            <div className="input-group-append search-btn">
              <button className="h-100 border-0 p-2 fs-4" type="submit">
                <Search color="blue" width={24} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ZipCodeForm;
