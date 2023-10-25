import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-secondary">
        <Container>
          <img src="/image.webp" alt="logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            style={{ justifyContent: "center" }}
            id="basic-navbar-nav "
          >
            <Nav className="">
              <NavDropdown
                title="مدیریت اسلایدر ها"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item>
                  <Link to={"/admin/dashboard/upload-slider"}>ایجاد</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/admin/dashboard/edit-slider"}>ویرایش</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/admin/dashboard/show-slider"}>مشاهده</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminHeader;
