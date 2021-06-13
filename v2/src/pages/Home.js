import React, { useContext } from "react";
import Card from "../components/Card";
import { CountryContext } from "../contexts/CountryContext";
import Search from "../components/Search";

export default function Home() {
  const { countries, isLoading, hasError } = useContext(CountryContext);
  return (
    <div>
      {isLoading && <div>loading</div>}
      {hasError && <div>Error</div>}
      {!isLoading && !hasError && (
        <>
          <Search />
          <div className="countryContainer">
            {countries.map((country) => {
              return <Card country={country} key={country.name} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
