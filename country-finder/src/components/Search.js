import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import OneCountry from "../components/OneCountry";

const Search = () => {
  const [countryName, setCountryName] = useState("");
  const [countryDetails, setCountryDetails] = useState();
  const refContainer = useRef(null);
  const { isLoading, hasError } = useFetch;

  useEffect(() => {
    refContainer.current.focus();
  });

  const fetchCountryData = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${countryName}`
    );
    const result = await response.json();
    setCountryDetails(result);
    console.log(result);
  };

  const handleSubmit = (e) => {
    fetchCountryData();
  };

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="cityName"
          placeholder="Enter Country Name..."
          value={countryName}
          ref={refContainer}
          onChange={handleChange}
        />
        <Link to={`/${countryName}`}>
          <button
            className="button"
            type="submit"
            disabled={!countryName && true}
            onClick={handleSubmit}
          >
            Search
          </button>
        </Link>
      </form>
      {isLoading && <p className="loading">Loading....</p>}
      {hasError && <p className="error">Something Went Wrong!</p>}
      {countryDetails && <OneCountry country={countryDetails} />}
    </div>
  );
};

export default Search;
