import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import React from "react";
function MainNavbar() {
  return (
    <Navbar
      style={{ backgroundColor: "#071740", position: "sticky" }}
      // bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          BharatNeta
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
