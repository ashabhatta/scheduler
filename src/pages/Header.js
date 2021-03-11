import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="faded" light expand="lg">
        <NavbarBrand href="/">
        Scheduler</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link to="/">Home</Link>
             <Link to="/patientdata">Appointments</Link>
        <Link to="/form" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Schedule</Link>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
      <hr style={{ backgroundColor:'black' }} />     
    </div>
  );
}
 
export default Headers;