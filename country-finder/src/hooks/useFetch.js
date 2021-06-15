import { useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState();

  const fetchAllCountries = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setCountries(result);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCountry = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setCountry(result);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchSearchCountry = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setSearchedCountry(result);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    hasError,
    countries,
    country,
    searchedCountry,
    fetchAllCountries,
    fetchCountry,
    fetchSearchCountry,
  };
};
export default useFetch;
