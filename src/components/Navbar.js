import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" data-bs-theme="light" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-weight-bold">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="ABC College logo"
          />{' '}
          Commerce College
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="font-weight-bold" onClick={handleLinkClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="font-weight-bold" onClick={handleLinkClick}>About us</Nav.Link>
            <Nav.Link as={Link} to="/course" className="font-weight-bold" onClick={handleLinkClick}>Courses</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="font-weight-bold" onClick={handleLinkClick}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/Join" className="font-weight-bold" onClick={handleLinkClick}>Admission</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
