import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import OneCountry from "../components/OneCountry";
import useFetch from "../hooks/useFetch";

const Details = (props) => {
  const {
    params: { alpha3Code },
  } = props.match;

  const url = `https://restcountries.eu/rest/v2/name/${alpha3Code}`;
  const [fetchCountry, country, isLoading, hasError] = useFetch(url);

  useEffect(() => {
    if (alpha3Code) fetchCountry();
  }, [alpha3Code]);

  return (
    <div>
      {isLoading && <div>loading</div>}
      {hasError && <div>Error</div>}
      {!isLoading && !hasError && country && (
        <div>
          <OneCountry country={country[0]} />
        </div>
      )}
    </div>
  );
};
export default withRouter(Details);
