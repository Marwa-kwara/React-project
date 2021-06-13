import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../contexts/CountryContext";

const Search = ({ value }) => {
  const [countryName, setCountryName] = useState("");
  const { isLoading, hasError, setPath } = useContext(CountryContext);
  const refContainer = useRef(null);
  //   const url = `https://restcountries.eu/rest/v2/alpha/${countryName}`;

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.onSubmit();
    const {
      params: { name },
    } = props.match;

    useEffect(() => {
      setPath(alpha3Code);
    }, [alpha3Code, setPath]);
  };

  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cityName"
          placeholder="Enter Country"
          value={countryName}
          ref={refContainer}
          onChange={handleChange}
        />
        <Link to={`$country.name`}>
          <button type="submit" disabled={!value && true}>
            Search Country
          </button>
        </Link>
      </form>
      {isLoading && <p className="loading">Loading....</p>}
      {hasError && <p className="error">Something Went Wrong!</p>}
    </div>
  );
};
export default Search;
