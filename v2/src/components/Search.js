import { useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Search = () => {
  const [countryName, setCountryName] = useState("");
  const refContainer = useRef(null);
  const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
  const { isLoading, hasError, fetchCountryDetails } = useFetch(url);

  const onSubmit = (e) => {
    e.onSubmit();
    fetchCountryDetails();
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <div className="search">
      <h1 className="headerCityPage">Country</h1>
      <form onSubmit={onSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search Country"
          value={countryName}
          ref={refContainer}
          onChange={(e) => {
            setCountryName(e.target.value);
          }}
        />
        <Link to={`$country.name`}>
          <button className="searchSubmit" type="submit">
            Search
          </button>
        </Link>
      </form>
      {isLoading && <p className="loading">Loading....</p>}
      {hasError && <p className="error">Something Went Wrong!</p>}
    </div>
  );
};

export default Search;
