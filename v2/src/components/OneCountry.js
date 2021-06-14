export default function OneCountry({ country }) {
  const { name, flag, alpha3Code, population, subregion, region, capital } =
    country;
  return (
    <div className="oneCard">
      <img src={flag} alt={""} />
      <h3>Country name : {name} </h3>
      <h3>Capital : {capital}</h3>
      <h3>alpha3Code : {alpha3Code}</h3>
      <h3>region : {region}</h3>
      <h3>subregion : {subregion}</h3>
      <h3>population : {population}</h3>
    </div>
  );
}
