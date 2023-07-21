import React from "react";
import {AuthContext} from '../Protected/AuthContext'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../Images/logoImage.jpeg';
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useContext } from "react";

function Navtop() {
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
          <div className="bg-transparent text-capitalize text-dark px-4 py-2 rounded-4 shadow">
              user
            </div>
            <Navbar.Text>
              <Dropdown>
                <Dropdown.Toggle variant="transparent mx-5" id="dropdown-basic">
                  Courses
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-2">
                    MERN Stack
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Mean Stack
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Text>
            <Navbar.Text>
              <button className="btn btn-warning" onClick={handleClick}>Logout</button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navtop;
