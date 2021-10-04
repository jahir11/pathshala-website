import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from './image/logo.png'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>
        <NavLink className="anchor" to="/home"><img className="logo" src={img} alt="" /><b className="text-danger">Path</b>shala</NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto text-center">
        <NavLink className="anchor" to="/home">Home</NavLink>
        <NavLink className="anchor" to="/about">About</NavLink>
        <NavLink className="anchor" to="/services">Service</NavLink>
        <NavLink className="anchor" to="/facilities">Our Facilities</NavLink>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;