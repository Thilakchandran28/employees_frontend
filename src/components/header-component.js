import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div className='header-alignment' >
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand className="mr-auto">
          <Link to="/">
            <img alt="Logo" src={require("../img/Logo.png")} width={100} height={50} className="d-inline-block align-top logo-alignment" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#EE633A", marginRight: '3%' }} />
        <Navbar.Collapse id="basic-navbar-nav">
            <h1 className='whtt'> TK Employees Analysis</h1>
          <Nav className="ml-auto" style={{paddingLeft: "250px"}} >
            <NavLink to="/" style={{ textDecoration: "none" }}>Home</NavLink>
            <NavLink to="/enter" style={{ textDecoration: "none" }}>EnterData</NavLink>
            <NavLink to="/employ" style={{ textDecoration: "none" }}>EmployeesData</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Navbar>

        </div>
    );
};

export default HeaderComponent;