import { useEffect, createContext } from "react";
import useFetch from "../hooks/useFetch";

export const CountryContext = createContext();

export const CountryProvider = (props) => {
  const url = "https://restcountries.eu/rest/v2/all";
  const { isLoading, hasError, countriesList, fetchAllCountries } =
    useFetch(url);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <CountryContext.Provider value={[countriesList, isLoading, hasError]}>
      {props.children}
    </CountryContext.Provider>
  );
};
