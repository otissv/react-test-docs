import React from 'react';
import uikit from 'react-uikit-base';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';
import Button from 'react-uikit-button';
import Icons from 'react-uikit-icons';


const AppSidebar = (props) => {
  const cssClassNames = [
    'uk-offcanvas',
    'App-sidebar',
    props.open ? 'uk-active' : '',
  ].join(' ');


  const testTilte = (name, failed) => {
    const cssClassName = failed ? 'App-failed--color' : 'App-passed--color';
    const icon = failed ?'times' : 'check';

    return <div>
      <Icons
        className={cssClassName}
        icon={icon}
      /> {name}
    </div>;
  }

  return <aside className={cssClassNames}>
    <div className="uk-offcanvas-bar">
      <Button
        type='close'
        onClick={props.onNavClose}
      />
      <Nav>
        <NavItem type='header' body='Tests' />
        {
          props.items.map(item => <NavItem
            className={item.failed ? 'App-sidebar-failed--color' : null}
            key={item.id}
            href='#'
            body={testTilte(item.name, item.failed)}
            onClick={props.onNavItemClick}
            data-appnavid={item.id}
          />)
        }
      </Nav>
    </div>
  </aside>;
};


export default uikit.base(AppSidebar);
