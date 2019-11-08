import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import csp1 from '../images/csp1.png';

class Navigation extends React.Component {
 
 //Implement the below method for handling Logout with the required binding
  /* onFnf() {
    
  } */
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ "height": "75px" }}>
            <Navbar.Brand href="#">
              <img height="55px" src={csp1} alt="csp1"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{marginLeft:'1180px'}}>
              <Nav>
                <NavItem href="/" style={{color:'white'}}>
                  Logout
                </NavItem>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
};

export default withRouter(Navigation);
