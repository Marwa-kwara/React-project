import React, { useContext, useEffect } from "react";
import { CountryContext } from "../contexts/CountryContext";
import { withRouter } from "react-router-dom";
import OneCountry from "../components/OneCountry";

const Details = (props) => {
  const {
    params: { alpha3Code },
  } = props.match;
  const { country, setPath, isLoading, hasError } = useContext(CountryContext);

  useEffect(() => {
    setPath(alpha3Code);
  }, [alpha3Code, setPath]);

  return (
    <div>
      {isLoading && <div>loading</div>}
      {hasError && <div>Error</div>}
      {!isLoading && !hasError && (
        <div>
          <OneCountry country={country} />
        </div>
      )}
    </div>
  );
};
export default withRouter(Details);
