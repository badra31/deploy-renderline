import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// import logo from "../assets/logo.png";
import logo from "../assets/logo-RenderLine-without-text-line.svg";

const Navigation = () => {
  //LOGIN
  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const user = useAuth();

  //BURGER
  const toggleMenu = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show-nav");
  };

  return (
    <div className="navigation">
      <nav class="navbar dark-mode" role="navigation">
        <div class="navbar__logo">
          <img src={logo} alt="logo Renderline" />
        </div>
        <ul class="navbar__links">
          {user && (
            <>
              <li class="navbar__link first">
                <NavLink
                  to="/render"
                  className={(element) =>
                    element.isActive ? "nav-active" : ""
                  }
                >
                  <a href="#" className="oui">
                    RENDERLINE
                  </a>
                </NavLink>
              </li>
              <li class="navbar__link second">
                <NavLink
                  to="/data"
                  className={(element) =>
                    element.isActive ? "nav-active" : ""
                  }
                >
                  <a href="#">DATA</a>
                </NavLink>
              </li>
              <li class="navbar__link third">
                <NavLink
                  to="/project"
                  className={(element) =>
                    element.isActive ? "nav-active" : ""
                  }
                >
                  <a href="#">PROJECT</a>
                </NavLink>
              </li>
              <li class="navbar__link four">
                <NavLink
                  to="/documentation-1"
                  className={(element) =>
                    element.isActive ? "nav-active" : ""
                  }
                >
                  <a href="#">DOCUMENTATION</a>
                </NavLink>
              </li>
              <li class="navbar__link fifth">
                <NavLink
                  to="/about"
                  className={(element) =>
                    element.isActive ? "nav-active" : ""
                  }
                >
                  <a href="#">ABOUT</a>
                </NavLink>
              </li>
              <li class="navbar__link sixth">
                <NavLink
                  to="/login"
                  className={(element) =>
                    element.isActive ? "nav-active" : ""
                  }
                >
                  <a href="#">LOGOUT</a>
                </NavLink>
              </li>
            </>
          )}
          {!user && (
            <>
              <li class="navbar__link first">
                <NavLink
                  to="/render"
                  className={(element) =>
                    element.isActive ? "nav-active" : ""
                  }
                >
                  <a href="#" className="oui">
                    RENDERLINE
                  </a>
                </NavLink>
              </li>
              <li class="navbar__link four">
                <NavLink
                  to="/login"
                  className={(element) =>
                    element.isActive ? "nav-active" : ""
                  }
                >
                  <a href="#">LOGIN</a>
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <button onClick={toggleMenu} class="burger">
          <span class="bar"></span>
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
