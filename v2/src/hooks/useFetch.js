import { useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [countriesList, setCountriesList] = useState([]);
  const [countryDetail, setCountryDetails] = useState({});

  const fetchAllCountries = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const allCountries = await response.json();
      setCountriesList(allCountries);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCountryDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const countryData = await response.json();
      setCountryDetails(countryData);
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
    countriesList,
    countryDetail,
    fetchAllCountries,
    fetchCountryDetails,
  };
};

export default useFetch;
