import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const MyNavbar = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/foods">Foods</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Nav className="me-auto">
            <NavDropdown title="Хэрэглэгч" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Нэвтрэх</NavDropdown.Item>
              <NavDropdown.Item href="/#action/3.1">
                Хувийн мэдээлэл
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Тохиргоо</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={props.onLogout}>
                Системээс гарах
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
