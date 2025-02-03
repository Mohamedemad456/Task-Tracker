import logo from "../logo.svg";
import style from "../CSS/NavBar.module.css";
import { NavLink} from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          <img src={logo} alt="" />
          Taskedo
        </NavLink>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className={`nav-item ${style.link_effect}`}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-light mx-3"
                    : "nav-link text-light mx-3"
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={`nav-item ${style.link_effect}`}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-light mx-3"
                    : "nav-link text-light mx-3"
                }
                to="/features"
              >
                Features
              </NavLink>
            </li>
            <li className={`nav-item ${style.link_effect}`}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-light mx-3"
                    : "nav-link text-light mx-3"
                }
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
