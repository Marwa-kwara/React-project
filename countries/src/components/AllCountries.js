import { AllCountriesContext } from "./AllCountriesContext";
import { useContext } from "react";
import Button from "../pages/Button";
import "../App.css";
import { Link } from "react-router-dom";
import CountriesComponent from "../pages/countriesComponent";
import CountryView from "./CountryMoreInfo";
import { CountryMoreInfoContext } from "./CountryMoreInfoContext";

export default function CountriesView() {
  const [isLoading, hasError] = useContext(AllCountriesContext);
  const [countryDetail] = useContext(CountryMoreInfoContext);

  return (
    <div>
      {isLoading && <div>loading</div>}
      {hasError && <div>Error</div>}
      {!isLoading && !hasError && (
        <div>
          <CountriesComponent />
          <Link to={`/${countryDetail.name}`}>
            <Button onClick={CountryView} />
          </Link>
        </div>
      )}
    </div>
  );
}
