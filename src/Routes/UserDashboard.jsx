import React from "react";
import { Link } from "react-router-dom";
import Navtop from "../smallRoutes/NavTop";
import mern from "../Images/PHOTO-2023-07-19-11-01-58.jpg";
import mean from '../Images/pxfuel.jpg'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserDashboard() {
  return (
    <>
      <div>
        <Navtop />
        <div className="row">
          <div className="col mt-5 d-flex justify-content-end text-center">
            <Card  style={{ width: "18rem"}}>
              <Card.Img variant="top" src={mern} />
              <Card.Body >
                <Card.Title>MERN Stack</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary"> <Link className="text-light link-underline link-underline-opacity-0" to='/home/dashboard'> Go to Course</Link> </Button>
              </Card.Body>
            </Card>
          </div>
          
          <div className="col mt-5 d-flex justify-content-start text-center">
            <Card className="" style={{ width: "18rem"}}>
              <Card.Img variant="top" src={mean} className="mb-4" />
              <Card.Body>
                <Card.Title>MEAN Stack</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="mt-2">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          </div>
        </div>
      
    </>
  );
}

export default UserDashboard;
