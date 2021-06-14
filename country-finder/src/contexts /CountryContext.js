import { createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const CountryContext = createContext();

export default function CountryContextProvider(props) {
  const url = "https://restcountries.eu/rest/v2/all";

  const { isLoading, hasError, countries, fetchAllCountries } = useFetch(url);
  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        isLoading,
        hasError,
        countries,
        fetchAllCountries,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
}
