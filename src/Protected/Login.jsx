import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Routes/Home";
import NavTopLogin from '../smallRoutes/NavTopLogin';
import Footer from "../smallRoutes/Footer";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is user
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic
    if (!username) {
      setUsernameError("Username is required.");
      return;
    }
    if (!password) {
      setPasswordError("Password is required.");
      return;
    }

    login(username, password, role);
    setUsername("");
    setPassword("");
    setUsernameError("");
    setPasswordError("");

    // Redirect to respective routes based on role
    if (role === "user") {
      navigate("/user");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (!e.target.value) {
      setUsernameError("Username is required.");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <div className="sticky-top">
        <NavTopLogin />
      </div>

      <div className="container-fluid" style={{ width: "100%", height: "90vh" }} id="Login-back">
        <div className="container d-block py-5 px-4" style={{ width: "400px", backgroundColor: "transparent" }} >

          <form className="form-control border-0 shadow text-light container p-5 text-center" onSubmit={handleSubmit} style={{ backgroundColor: "#00000048" }}>
            <h2 className="text-center">Login</h2>
            <div className="pt-4">
              <label className="form-label" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                
                id="username"
                className={`form-control bg-transparent ${usernameError ? 'is-invalid' : ''}`}
                value={username}
                onChange={handleUsernameChange}
              />
              {usernameError && <div className="invalid-feedback">{usernameError}</div>}
            </div>
            <div className="pb-3 pt-3">
              <label className="form-label " htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                
                id="password"
                className={`form-control bg-transparent ${passwordError ? 'is-invalid' : ''}`}
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <div className="invalid-feedback">{passwordError}</div>}
            </div>
            <div>
              <label className="form-label pt-5" htmlFor="role">
                Role:
              </label>
              <select
                id="role"
                className="form-select bg-transparent text-light mb-5"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option className="bg-dark" value="user">User</option>
                <option className="bg-dark" value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-outline-light mt-4 ">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
