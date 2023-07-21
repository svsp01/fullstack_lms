import React from "react";
import {AuthContext} from '../Protected/AuthContext'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../Images/logoImage.jpeg';
import { Link } from "react-router-dom";
import { useContext } from "react";

function NavTopAdmin() {
    const { logout } = useContext(AuthContext);
        const handleClick = () =>{
          
          logout();
        }
  return (
    <>
      <Navbar className="bg-body-tertiary shadow-lg">
        <Container>
          <Navbar.Brand>
            <Link to = "/admin/dashboard">
            <img src={logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="bg-transparent text-capitalize text-dark p-2 rounded-4 me-4 shadow">
              admin
            </div>
            <Navbar.Text>
              <button className="btn btn-warning" onClick={handleClick}>Logout</button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTopAdmin;
