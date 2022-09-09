import React from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  // Fonction pour se login
  const login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "1234") {
      localStorage.setItem("user", "test");
      navigate("/render");
    } else {
      alert("Mot de passe ou identifiant erroné");
    }
  };

  // Fonction pour se logout
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/render");
  };

  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const user = useAuth();

  return (
    <>
      <Navigation />
      <div className="log">
        {!user && (
          <>
            <h1>LOGIN</h1>
            <form>
              <div className="element">
                <input
                  id="username"
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                ></input>
              </div>
              <div className="element">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                ></input>
              </div>
              <div className="element">
                <input
                  type="submit"
                  className="button"
                  onClick={login}
                  value="LOGIN"
                ></input>
              </div>
            </form>
          </>
        )}
      </div>
      <div className="log">
        {user && (
          <>
            <h1>LOGOUT</h1>

            <button className="button" onClick={logout}>
              LOGOUT
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
