export default function Card({ country }) {
  return (
    <div className="oneCard">
      <img src={country.flag} alt={""} />
      <h3>Country name : {country.name} </h3>
      <h3>Capital :{country.capital}</h3>
      <h3>alpha3Code:{country.alpha3Code}</h3>
      <h3>population:{country.population}</h3>
    </div>
  );
}
