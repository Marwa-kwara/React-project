import { useState, createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const DetailsContext = createContext();

export default function DetailsContextProvider(props) {
  const [path, setPath] = useState("");

  const url = `https://restcountries.eu/rest/v2/alpha/${path}`;
  const { isLoading, hasError, country, fetchCountryDetails } = useFetch(url);
  useFetch(url);
  useEffect(() => {
    if (path) fetchCountryDetails();
  }, [path]);

  return (
    <DetailsContext.Provider
      value={{
        isLoading,
        hasError,
        country,
        fetchCountryDetails,
        setPath,
      }}
    >
      {props.children}
    </DetailsContext.Provider>
  );
}
