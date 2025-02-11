import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../CSS/SideBar.module.css";

function SideBar() {
  const [expand, setExpand] = useState(true);
  
  function expandSet() {
    setExpand(!expand);
  }

  return (
    <>
      <div
        className={`${styles.wrapper}  ${
          expand ? "col-sm-12 col-md-4 col-lg-2" : "col-sm-1 col-md-1 col-lg-1"
        }`}
      >
        <aside
          id="sidebar"
          className={`${styles.sidebar} ${
            expand ? `${styles.expand} w-100` : `${styles.collapse} w-75`
          } vh-100 h-100`}
        >
          <div className="d-flex align-items-center justify-content-start">
            <button className={`${styles.toggleBtn}`} onClick={expandSet}>
              <i className="bi bi-list"></i>
            </button>
            <div
              className={`${styles.sidebarLogo} ${styles.nav_animation} nav-link ms-1`}
            >
              <NavLink
                to="/"
                className={`fs-3 mt-2`}
                style={{ fontFamily: "cursive" }}
              >
                Dashboard
              </NavLink>
            </div>
          </div>
          <ul
            className={`${styles.sidebarNav} ${
              expand ? "align-items-start ms-3" : "align-items-center"
            } d-flex flex-column list-unstyled`}
          >
            <li className={`${styles.sidebarItem} mb-2`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link text-light fs-4 ${isActive ? styles.activeLink : ""} p-2 ${styles.sidebarLink}`
                }
                title="Home"
              >
                {({ isActive }) => (
                  <>
                    <i
                      className={`bi bi-house ${styles.icon} ${
                        isActive ? styles.activeIcon : ""
                      }`}
                    ></i>
                    {expand && <span className="ms-2">Home</span>}
                  </>
                )}
              </NavLink>
            </li>
            <li className={styles.sidebarItem}>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `nav-link text-light fs-4 ${isActive ? styles.activeLink : ""} p-2 ${styles.sidebarLink}`
                }
                title="Features"
              >
                {({ isActive }) => (
                  <>
                    <i
                      className={`bi bi-card-checklist ${styles.icon} ${
                        isActive ? styles.activeIcon : ""
                      }`}
                    ></i>
                    {expand && <span className="ms-2">Features</span>}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
      <Outlet />
    </>
  );
}

export default SideBar;
