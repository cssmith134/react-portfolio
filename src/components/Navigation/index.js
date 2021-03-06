import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Navigation(props) {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#about">Cooper Smith</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#about" onClick={()=>{
            props.setCurrentPage("About")
        }}>About</Nav.Link>
        <Nav.Link href="#contact" onClick={() => {
            props.setCurrentPage("Contact")
        }}>Contact</Nav.Link>
        <Nav.Link href="#portfolio" onClick={() => {
            props.setCurrentPage("Portfolio")
        }}>Portfolio</Nav.Link>
        <Nav.Link href="#resume" onClick={() => {
            props.setCurrentPage("Resume")
        }}>Resume</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;