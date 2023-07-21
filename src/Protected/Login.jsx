import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Routes/Home";
import NavTopLogin from '../smallRoutes/NavTopLogin'
import Footer from "../smallRoutes/Footer";

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
    <div className="sticky-top">
    <NavTopLogin />
    </div>
    
    <div className="container-fluid" style={{width:"100%", height:"90vh"}} id="Login-back">
    <div className="container d-block py-5 px-4" style={{width:"400px", backgroundColor:"transparent"}} >
      
      <form className="form-control border-0 shadow text-light  container p-5 text-center" onSubmit={handleSubmit} style={{backgroundColor:"#00000048"}}>
      <h2 className="text-center">Login</h2>
        <div className="pt-4">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="form-control bg-transparent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pb-3 pt-3">
          <label className="form-label " htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
    <Footer/>
    </>
  );
};

export default Login;
