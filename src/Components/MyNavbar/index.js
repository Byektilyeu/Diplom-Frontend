import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import UserProfile from "../../Pages/UserProfile";

const MyNavbar = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Нүүр |</Nav.Link>
              <Nav.Link href="/about">Бидний тухай |</Nav.Link>
              <Nav.Link href="/category">Категори | </Nav.Link>
              <Nav.Link href="/user-foods">Таны оруулсан хоолнууд | </Nav.Link>
              <NavDropdown title="Бүх хоолнууд" id="basic-nav-dropdown">
                <NavDropdown.Item href="/foods">
                  Бүх хоолыг харах
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#category1">
                  Категори 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#category2">
                  Категори 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#category3">
                  Категори 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#category4">
                  Категори 4
                </NavDropdown.Item>
                <NavDropdown.Item href="#category5">
                  Категори 5
                </NavDropdown.Item>
                <NavDropdown.Item href="#category6">
                  Категори 6
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Nav className="me-auto">
            <NavDropdown title="Хэрэглэгч" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">Бүртгүүлэх</NavDropdown.Item>
              <NavDropdown.Item href="/login">Нэвтрэх</NavDropdown.Item>
              <NavDropdown.Item href="/userprofile">
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
