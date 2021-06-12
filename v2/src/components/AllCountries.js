import { AllCountriesContext } from "./AllCountriesContext";
import { useContext } from "react";
import Button from "../pages/Button";
import "../App.css";
import { Link } from "react-router-dom";
import CountriesComponent from "../pages/countriesComponent";


const AllCountries = () => {
  const [isLoading, hasError] = useContext(AllCountriesContext);

  return (
    <div>
      {isLoading && <div>loading</div>}
      {hasError && <div>Error</div>}
      {!isLoading && !hasError && (
        <div>
          <CountriesComponent />
          <Link to={`/$country.name`}>
            <Button/>
          </Link>
        </div>
      )}
    </div>
  );
};
export default AllCountries;
