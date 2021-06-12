import { CountryMoreInfoContext } from "./CountryMoreInfoContext";
import { useContext } from "react";
import "../App.css";
import CountryMoreInfoView from "../pages/CountryMoreInfoView";

export default function CountryView() {
  // const {
  //   params: { name },
  // } = match;

  const [isLoading, hasError, countryDetail] = useContext(
    CountryMoreInfoContext
  );
  // useEffect(() => {
  //   setPath(name);
  // }, [name]);

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
