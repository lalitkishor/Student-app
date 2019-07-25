import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import Search from "./search";

class NavBar extends PureComponent {
  state = {
    isSetAccending: false,
    isSetDesending: false
  }
  setAccending = () => {
    this.props.sortStudentname({
      isSetAccending: true,
      isSetDesending: false
    })
  }
  setDesending = () => {
    this.props.sortStudentname({
      isSetAccending: false,
      isSetDesending: true
    })
  }
  render() {
    return (
      <Navbar bg="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home" style={{ color: 'white' }}>Embibe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By Names
              </Dropdown.Toggle>
              <Dropdown.Menu id="stundetNameSort">
                <Dropdown.Item eventKey="1" onClick={this.setAccending} >Accending</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={this.setDesending}>Desending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Search setSearchText={this.props.setSearchText} />
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default NavBar