import { Link } from "react-router-dom";

export default function Card({ country }) {
  const { name, flag } = country;
  return (
    <div className="card">
      <Link to={`/${name}`}>
        <img className="countriesListImg" src={flag} alt={""} />
        <h3> {name} </h3>
      </Link>
    </div>
  );
}
