import React from "react";
import { CountryContext } from "./CountryContext";
import { useContext } from "react";
import Button from "../pages/Button";

export default function CountriesView({ name, flag, onClick }) {
  const [countriesList, isLoading, hasError] = useContext(CountryContext);

  return (
    <div>
      {isLoading && <div>loading</div>}
      {hasError && <div>Error</div>}
      {!isLoading &&
        !hasError &&
        countriesList.map((country) => {
          return (
            <div>
              <img src={country.flag} alt={""} />
              <h1>Country name : {country.name} </h1>
              <Button />
            </div>
          );
        })}
    </div>
  );
}
