import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";
import Navbars from "../components/Navbar";
import React from "react";
import imagen from '../testimonio-1.jpg';

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Código de manejo de inicio de sesión...
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: loginUsername, password: loginPassword }),
      });

      // Resto del código de manejo de respuesta...

    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // Código de manejo de registro...
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: registerName, username: registerUsername, password: registerPassword }),
      });

      // Resto del código de manejo de respuesta...

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (activeTab === "login") {
      if (name === "loginUsername") {
        setLoginUsername(value);
      } else if (name === "loginPassword") {
        setLoginPassword(value);
      }
    } else if (activeTab === "register") {
      if (name === "registerName") {
        setRegisterName(value);
      } else if (name === "registerUsername") {
        setRegisterUsername(value);
      } else if (name === "registerPassword") {
        setRegisterPassword(value);
      }
    }
  };

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
      <><Navbars imagen={imagen}></Navbars><div className="container w-100 mt-5">
      {/* Pills navs */}
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link cursor-wait ${activeTab === "login" ? "active" : ""}`}
            id="tab-login"
            data-mdb-toggle="pill"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
            onClick={() => handleTabClick("login")}
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "register" ? "active" : ""}`}
            id="tab-register"
            data-mdb-toggle="pill"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
            onClick={() => handleTabClick("register")}
          >
            Register
          </a>
        </li>
      </ul>

      {/* Pills content */}
      <div className="tab-content">
        <div
          className={`tab-pane fade ${activeTab === "login" ? "show active" : ""}`}
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleLoginSubmit}>
            {/* Resto del formulario de login */}
            <div className="form-outline mb-4">
              {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
              <label className="form-label" htmlFor="loginUsername">
                Nombre de usuario
              </label>
              <input
                type="text"
                name="loginUsername"
                id="loginUsername"
                className="form-control"
                value={loginUsername}
                onChange={handleChange} />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="loginPassword">
                Contraseña
              </label>
              <input
                type="password"
                name="loginPassword"
                id="loginPassword"
                className="form-control"
                value={loginPassword}
                onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Iniciar sesión
            </button>
          </form>
        </div>

        <div
          className={`tab-pane fade ${activeTab === "register" ? "show active" : ""}`}
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form onSubmit={handleRegisterSubmit}>
            {/* Resto del formulario de registro */}
            <div className="form-outline mb-4">
              {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
              <label className="form-label" htmlFor="registerName">
                Nombre
              </label>
              <input
                type="text"
                name="registerName"
                id="registerName"
                className="form-control"
                value={registerName}
                onChange={handleChange} />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="registerUsername">
                Nombre de usuario
              </label>
              <input
                type="text"
                name="registerUsername"
                id="registerUsername"
                className="form-control"
                value={registerUsername}
                onChange={handleChange} />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="registerPassword">
                Contraseña
              </label>
              <input
                type="password"
                name="registerPassword"
                id="registerPassword"
                className="form-control"
                value={registerPassword}
                onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">
              Unirse ahora
            </button>
          </form>
        </div>
      </div>
    </div></>
  );
}
