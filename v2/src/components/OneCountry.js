export default function Card({ country }) {
  return (
    <div>
      <img src={country.flag} alt={""} />
      <h2>Country name : {country.name} </h2>
      <h2>Capital :{country.capital}</h2>
      <h2>alpha3Code:{country.alpha3Code}</h2>
      <h2>population:{country.population}</h2>
    </div>
  );
}
