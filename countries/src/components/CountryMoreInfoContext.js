import { useEffect, createContext } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export const CountryMoreInfoContext = createContext();

export const CountryMoreInfoProvider = (props) => {
  let { name } = useParams();
  //const [path, setPath] = useState("");

  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  console.log(url);
  const { isLoading, hasError, countryDetail, fetchCountryDetails } =
    useFetch(url);

  useEffect(() => {
    fetchCountryDetails();
  }, []);

  return (
    <CountryMoreInfoContext.Provider
      value={[countryDetail, isLoading, hasError]}
    >
      {props.children}
    </CountryMoreInfoContext.Provider>
  );
};
