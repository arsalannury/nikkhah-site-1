import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-secondary">
        <Container>
          <img src="image.webp" alt="logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            style={{ justifyContent: "center" }}
            id="basic-navbar-nav "
          >
            <Nav className="">
              <Nav.Link className="text-white" href="#home">
                آموزش
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                درباره ی فناپ
              </Nav.Link>
              <NavDropdown title="منو" id="basic-nav-dropdown" className="text-white">
                <NavDropdown.Item href="#action/3.1">شرکت ها</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">پروژه ها</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
