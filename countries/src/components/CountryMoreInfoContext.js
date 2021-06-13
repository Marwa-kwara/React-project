import { useState, useEffect, createContext } from "react";
import useFetch from "../hooks/useFetch";
//import { useParams } from "react-router-dom";

export const CountryMoreInfoContext = createContext();

export const CountryMoreInfoProvider = (props) => {
  //let { name } = useParams();
  //console.log(name);
  const [path, setPath] = useState("");

  //const url = `https://restcountries.eu/rest/v2/name/${name}`;
  //console.log(url);
  const { isLoading, hasError, countryDetail, fetchCountryDetails } =
    useFetch(url);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${path}`;
    console.log(url);
    fetchCountryDetails(url);
  }, [path]);

  return (
    <CountryMoreInfoContext.Provider
      value={[countryDetail, isLoading, hasError, setPath]}
    >
      {props.children}
    </CountryMoreInfoContext.Provider>
  );
};
