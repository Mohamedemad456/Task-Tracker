import logo from "../logo.svg";
import style from "../CSS/NavBar.module.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          <img src={logo} alt="" />
          Taskedo
        </a>
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
              <a
                className="nav-link active text-light mx-3"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className={`nav-item ${style.link_effect}`}>
              <a className="nav-link text-light mx-3" href="#">
                Features
              </a>
            </li>
            <li className={`nav-item ${style.link_effect}`}>
              <a className="nav-link text-light mx-3" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
