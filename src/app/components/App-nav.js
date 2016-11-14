import React from 'react';
import { Link } from 'react-router';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';
import uikit from 'react-uikit-base';


const AppNav = (props) => (
  <Nav {...props}>
      <NavItem type='item'><Link to='/reports'>Unit tests</Link></NavItem>
      <NavItem type='item'><Link to='/components'>Components</Link></NavItem>
  </Nav>
);

export default uikit.base(AppNav);
