import { CountryMoreInfoContext } from "../components/CountryMoreInfoContext";
import { useContext } from "react";
import "../App.css";

export default function CountryMoreInfoView() {
  const [countryDetail] = useContext(CountryMoreInfoContext);
  return countryDetail.map((country) => {
    return (
      <div>
        <h1>Capital: {countryDetail.capital}</h1>
        <h2>Alpha‑2 code:{countryDetail.alpha2Code}</h2>
        <h2>Alpha‑3 code:{countryDetail.alpha3Code}</h2>
        <h2>Languages: {countryDetail.languages}</h2>
      </div>
    );
  });
}
