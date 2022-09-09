import React from "react";
import { NavLink } from "react-router-dom";

const Navleft = () => {
  return (
    <div className="navleft">
      <nav class="navbar">
        <ul class="navbar-menu">
          <li class="logo">
            <a class="navbar-link">
              <span class="navbar-title">Tools</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-menu">
          <li class="navbar-item">
            <a className="navbar-link">
              <details open>
                <summary>Languages</summary>
                <NavLink
                  to="/documentation-1"
                  className={(element) =>
                    element.isActive ? "element-active" : ""
                  }
                >
                  <a class="navbar-link">
                    <span className="navbar-title">1nd Tool</span>
                  </a>
                </NavLink>
                <br></br>

                <NavLink
                  to="/documentation-2"
                  className={(element) =>
                    element.isActive ? "element-active" : ""
                  }
                >
                  <a class="navbar-link">
                    <span className="navbar-title">2nd Tool</span>
                  </a>
                </NavLink>

                <br></br>
                <NavLink
                  to="/documentation-3"
                  className={(element) =>
                    element.isActive ? "element-active" : ""
                  }
                >
                  <a class="navbar-link">
                    <span className="navbar-title">3nd Tool</span>
                  </a>
                </NavLink>
                <br></br>
              </details>
            </a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link">
              <details open>
                <summary>Langage 2</summary>
                <NavLink
                  to="/documentation-4"
                  className={(element) =>
                    element.isActive ? "element-active" : ""
                  }
                >
                  <a class="navbar-link">
                    <span className="navbar-title">1st Tool</span>
                  </a>
                </NavLink>
                <br></br>
                <NavLink
                  to="/documentation-5"
                  className={(element) =>
                    element.isActive ? "element-active" : ""
                  }
                >
                  <a class="navbar-link">
                    <span className="navbar-title">2nd Tool</span>
                  </a>
                </NavLink>
                <br></br>
                <NavLink
                  to="/documentation-6"
                  className={(element) =>
                    element.isActive ? "element-active" : ""
                  }
                >
                  <a class="navbar-link">
                    <span className="navbar-title">3rd Tool</span>
                  </a>
                </NavLink>
                <br></br>
              </details>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navleft;
