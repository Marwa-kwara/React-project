import { useEffect, useRef, useContext } from "react";
import { CountryContext } from "../contexts /CountryContext";

const Search = () => {
  const { searchTerm, setSearchTerm, isLoading, hasError } =
    useContext(CountryContext);

  const refContainer = useRef(null);
  useEffect(() => {
    refContainer.current.focus();
  });

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        name="cityName"
        placeholder="Enter Country Name..."
        value={searchTerm}
        ref={refContainer}
        onChange={handleChange}
      />

      {isLoading && <p className="loading">Loading....</p>}
      {hasError && <p className="error">Something Went Wrong!</p>}
    </div>
  );
};

export default Search;
