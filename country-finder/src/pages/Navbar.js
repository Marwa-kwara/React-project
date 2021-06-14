import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <img
          className="logo"
          src="https://www.vippng.com/png/full/371-3712159_map-of-earth-top-freelancers-countries-2016.png"
          alt=""
        ></img>
      </Link>

      <Link to="/about">
        <img
          className="info"
          src="https://www.pngkey.com/png/full/675-6751777_general-info-icon.png"
          alt=""
        ></img>
      </Link>
    </nav>
  );
}

export default Nav;
