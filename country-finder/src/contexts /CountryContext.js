import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const CountryContext = createContext();

export default function CountryContextProvider(props) {
  const url = "https://restcountries.eu/rest/v2/all";
  const [searchTerm, setSearchTerm] = useState("");

  const [fetchAllCountries, countries, isLoading, hasError] = useFetch(url);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  let filteredCountries = countries || [];
  if (searchTerm) {
    filteredCountries = filteredCountries.filter((country) => {
      return country.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return (
    <CountryContext.Provider
      value={{
        isLoading,
        hasError,
        searchTerm,
        setSearchTerm,
        countries: filteredCountries,
        fetchAllCountries,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
}
