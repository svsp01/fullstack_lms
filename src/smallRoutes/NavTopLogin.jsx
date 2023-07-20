import React from "react";
import {AuthContext} from '../Protected/AuthContext'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../Images/logoImage.jpeg';
import { Link } from "react-router-dom";
import { useContext } from "react";

function NavTopLogin() {
    const { logout } = useContext(AuthContext);
        const handleClick = () =>{
          
          logout();
        }
  return (
    <>
      <Navbar className="bg-body-tertiary shadow-lg">
        <Container>
          <Navbar.Brand>
            <Link to = "/home">
            <img src={logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTopLogin;
