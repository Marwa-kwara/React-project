import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onClick }) => {
  return (
    <Link to="/:name">
      <button type="button">More Info</button>
    </Link>
  );
};
export default Button;
