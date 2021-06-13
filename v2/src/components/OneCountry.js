export default function Card({ country }) {
  const { name, population, capital, flag, alpha3Code } = country;
  return (
    <div>
      <img className="countriesListImg" src={flag} alt={""} />
      <h2>Country name : {name} </h2>
      <h2>Capital :{capital}</h2>
      <h2>alpha3Code:{alpha3Code}</h2>
      <h2>population:{population}</h2>
    </div>
  );
}
