import { useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  //const [cityNotFound, setCityNotFound] = useState(false);
  const [countriesList, setCountriesList] = useState([]);
  const [countryDetail, setCountryDetails] = useState({});
  // const [cityExist, setCityExist] = useState(false);
  // const [forecastData, setForecastData] = useState();

  const fetchAllCountries = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      //if (response.ok) {
      const allCountries = await response.json();
      setCountriesList(allCountries);
      //}
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
      const data = await response.json();
      setCountryDetails(
        data.map((country) => {
          return {
            capital: country.capital,
            code: country.alpha2Code,
            languages: country.languages,
          };
        })
      );
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
