export default function OneCountry({ country }) {
  if (country == null) {
    return <div>NO COUNTRY FOUND</div>;
  }

  const { name, flag, alpha3Code, population, subregion, region, capital } =
    country;

  return (
    <div className="oneCard">
      <h1> {name} </h1>
      <img src={flag} alt={""} />

      <h3>Capital : {capital}</h3>
      <h3>Alpha3Code : {alpha3Code}</h3>
      <h3>Region : {region}</h3>
      <h3>Subregion : {subregion}</h3>
      <h3>Population : {population}</h3>
    </div>
  );
}
