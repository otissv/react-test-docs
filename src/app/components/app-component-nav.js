import React from 'react';
import { Link } from 'react-router';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';

const AppNav = (props) => (
  <Nav {...props}>
      <NavItem type='item'><Link to='/reports'>Unit tests</Link></NavItem>
  </Nav>
);

export default AppNav;
