import { Link } from "react-router"; // Import Link
import { NavLink } from "react-router"; // Import Link

import "./NavBar.css";


function NavBar({ header }: { header: string }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <Link className="navbar-brand" to="/">
          {header}
        </Link>

        {/* Navigation Items */}
        <ul className="navbar-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Pradžia</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/spot" className="nav-link">Spot</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contract" className="nav-link">Contract</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;