import React, { Component } from 'react'
import {Navbar,Nav,Container}from 'react-bootstrap';
import { Link } from 'react-scroll';

class Navi extends Component {
  render() {
    return(
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand >Shant A</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav fixed="top">
     <Link to="About" spy={true}  offset={-200}> <Nav.Link >About me</Nav.Link></Link>
     <Link to="Skills" spy={true}  offset={-200}><Nav.Link >My Skills</Nav.Link></Link>
     <Link to="Projects" spy={true}  offset={-200}><Nav.Link >My Projects</Nav.Link></Link>
     <Link to="Footer" spy={true}  offset={-200}><Nav.Link eventKey={2}>Lets Talk !</Nav.Link></Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
  }
}
export default Navi;