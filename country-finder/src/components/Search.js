import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import OneCountry from "../components/OneCountry";

const Search = () => {
  const [path, setPath] = useState("");
  const url = `https://restcountries.eu/rest/v2/name/${path}`;

  const refContainer = useRef(null);
  const { isLoading, hasError, searchedCountry, fetchSearchCountry } =
    useFetch(url);

  useEffect(() => {
    refContainer.current.focus();
  });

  const handleSubmit = (e) => {
    fetchSearchCountry();
  };

  const handleChange = (event) => {
    setPath(event.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="cityName"
          placeholder="Enter Country Name..."
          value={path}
          ref={refContainer}
          onChange={handleChange}
        />
        <Link to={`/${path}`}>
          <button
            className="button"
            type="submit"
            disabled={!path && true}
            onClick={handleSubmit}
          >
            Search
          </button>
        </Link>
      </form>
      {isLoading && <p className="loading">Loading....</p>}
      {hasError && <p className="error">Something Went Wrong!</p>}
      {searchedCountry && <OneCountry path={searchedCountry} />}
    </div>
  );
};

export default Search;
