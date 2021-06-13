import React from "react";
import { Link } from "react-router-dom";

export default function Card({ country }) {
  const { name, flag, alpha3Code } = country;
  return (
    <div className="card">
      <Link to={`/${alpha3Code}`}>
        <img className="countriesListImg" src={flag} alt={""} />
        <h2>Country name : {name} </h2>
      </Link>
    </div>
  );
}
