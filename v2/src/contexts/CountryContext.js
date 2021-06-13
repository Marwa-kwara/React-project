import React, { useState, createContext, useEffect } from "react";

export const CountryContext = createContext();

export default function CountryContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [path, setPath] = useState("");

  useEffect(() => {
    const getCountryData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const result = await response.json();
        setCountries(result);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCountryData();
  }, []);

  useEffect(() => {
    const getSingleCountryData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${path}`
        );
        const result = await response.json();
        setCountry(result);
        console.log(result);
        setHasError(false);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (path) getSingleCountryData();
  }, [path]);

  return (
    <CountryContext.Provider
      value={{ isLoading, hasError, countries, country, setPath }}
    >
      {props.children}
    </CountryContext.Provider>
  );
}
