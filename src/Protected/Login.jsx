import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Routes/Home";
import NavTopLogin from '../smallRoutes/NavTopLogin'

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is user
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic
    login(username, password, role);
    setUsername("");
    setPassword("");

    // Redirect to respective routes based on role
    if (role === "user") {
      navigate("/user");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    }
  };

  return (
    <>
    <NavTopLogin/>
    <div className="container d-block" style={{width:"400px"}}>
      <h2 className="text-center">Login</h2>
      <form className="form-control container p-5 text-center" onSubmit={handleSubmit}>
        <div className="pt-5">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="role">
            Role:
          </label>
          <select
            id="role"
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-outline-primary mt-5 ">
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
