import { useEffect, createContext } from "react";
import useFetch from "../hooks/useFetch";

export const AllCountriesContext = createContext();

export const AllCountriesProvider = (props) => {
  const url = "https://restcountries.eu/rest/v2/all";
  const { isLoading, hasError, countriesList, fetchAllCountries } =
    useFetch(url);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <AllCountriesContext.Provider value={[countriesList, isLoading, hasError]}>
      {props.children}
    </AllCountriesContext.Provider>
  );
};
