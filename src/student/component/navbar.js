import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import Search from "./search";

class NavBar extends PureComponent {

  setAccending = () => {
    this.props.sortStudentname({
      isSetAccending: true,
      isSetDesending: false,
      isSetAccendingMark: false,
      isSetDesendingMark: false,
    })
  }
  setDesending = () => {
    this.props.sortStudentname({
      isSetAccending: false,
      isSetDesending: true,
      isSetAccendingMark: false,
      isSetDesendingMark: false,
    })
  }
  setMarkAccending = () => {
    this.props.sortStudentname({
      isSetAccendingMark: true,
      isSetDesendingMark: false,
      isSetAccending: false,
      isSetDesending: false
    })
  }
  setMarkDesending = () => {
    this.props.sortStudentname({
      isSetAccendingMark: false,
      isSetDesendingMark: true,
      isSetAccending: false,
      isSetDesending: false
    })
  }
  render() {
    return (
      <Navbar bg="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/" style={{ color: 'white' }}>Embibe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Dropdown style={{ marginLeft: '10px' }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By Name
              </Dropdown.Toggle>
              <Dropdown.Menu id="stundetNameSort">
                <Dropdown.Item eventKey="1" onClick={this.setAccending} >Accending</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={this.setDesending}>Desending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ marginLeft: '10px' }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By Mark
              </Dropdown.Toggle>
              <Dropdown.Menu id="stundetNameSort">
                <Dropdown.Item eventKey="3" onClick={this.setMarkAccending} >Accending</Dropdown.Item>
                <Dropdown.Item eventKey="4" onClick={this.setMarkDesending}>Desending</Dropdown.Item>
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