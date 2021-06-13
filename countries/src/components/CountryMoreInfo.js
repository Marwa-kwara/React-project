import { CountryMoreInfoContext } from "./CountryMoreInfoContext";
import { useEffect, useContext } from "react";
import "../App.css";
import CountryMoreInfoView from "../pages/CountryMoreInfoView";

export default function CountryView({ match }) {
  const {
    params: { name },
  } = match;

  const [isLoading, hasError, countryDetail, setPath] = useContext(
    CountryMoreInfoContext
  );
  useEffect(() => {
    setPath(name);
  }, [name]);

  return (
    <div>
      {isLoading && <div>loading</div>}
      {hasError && <div>Error</div>}
      {!isLoading && !hasError && (
        <CountryMoreInfoView countryDetail={countryDetail} />
      )}
    </div>
  );
}
