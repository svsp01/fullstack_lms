import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function Footer() {
  return (
    <Container fluid className="bg-dark pt-4" >
      <Row >
        <Col style={{ color: "white", fontWeight: "bold" }}>
          <Typography variant="subtitle1">
            <div className="d-flex">
              <HomeIcon className="me-2" />
              Home
            </div>
          </Typography>
          <Typography variant="subtitle1">
            <InfoIcon className="me-2" />
            About
          </Typography>
          <Typography variant="subtitle1">
            <AutoStoriesIcon className="me-2" />
            Course
          </Typography>
        </Col>

        <Col style={{ color: "white", fontWeight: "bold" }}>
          <Typography variant="subtitle1" className="text-decoration-underline">SOLUTION</Typography>
          <Typography variant="subtitle1">Print MIS</Typography>
          <Typography variant="subtitle1">Web2Print</Typography>
          <Typography variant="subtitle1">CRM</Typography>
          <Typography variant="subtitle1">FSM</Typography>
          <Typography variant="subtitle1">Pest Control</Typography>
        </Col>

        <Col style={{ color: "white", fontWeight: "bold" }}>
          <Typography variant="subtitle1" className="text-decoration-underline">Programming Languages</Typography>
          <Typography variant="subtitle1">Embedded Software</Typography>
          <Typography variant="subtitle1">Software Testing</Typography>
          <Typography variant="subtitle1">Analytics</Typography>
        </Col>

        <Col style={{ color: "white", fontWeight: "bold" }}>
          <Typography variant="subtitle1" className="text-decoration-underline">CONTACT</Typography>
          <Typography variant="body2">
            2000, Krishna Colony (opp. to Central Studio) Ramanathapuram Trichy
            Road Coimbatore - 641 005
          </Typography>
        </Col>

        <Col style={{ color: "white", fontWeight: "bold" }}>
          <Typography variant="subtitle1" className="text-decoration-underline">SUPPORT</Typography>
          <Typography variant="subtitle1">Terms & Conditions</Typography>
          <Typography variant="subtitle1">Privacy Policy</Typography>
          <Typography variant="subtitle1">Faq's</Typography>
        </Col>
      </Row>
      <br />
      <br />
      <Col style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
        <Typography variant="body2">
          Copyrights &copy; 2023 SmartCliff. All Rights Reserved.
        </Typography>
      </Col>
    </Container>
  );
}

export default Footer;
