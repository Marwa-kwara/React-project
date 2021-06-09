import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <Link style={navStyle} to="/">
        <h1>logo</h1>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>

        <Link style={navStyle} to="/borders">
          <li>Borders</li>
        </Link>

        <Link style={navStyle} to="/compare">
          <li>Compare</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
