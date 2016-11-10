import React from 'react';
import uikit from 'react-uikit-base';
import { Link } from 'react-router';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';
import '../styles/report.css';

const ReportSidebar = (props) => {
  const cleanProps = uikit.helpers.cleanProps([
    'items',
    'onAssertClick'
  ])(props);


  return <Nav
    {...cleanProps}
    parent type='side'
    col={props.col}
  >
    {props.items.map(parent => {
      return <div key={parent.id}>
        <NavItem
          className='Report-sidebar-header'
          body={parent.name}
          href='#'
          type='header'
        />
        { parent.tests.map(test => {
          return <NavItem
            key={test.id}
            parent
            body={test.name}
            href='#'
          >
            <NavItem parent>
              {test.asserts.map(assert => {
                return <NavItem
                  key={assert.id}
                  body={assert.name}
                  onClick={props.onAssertClick}
                  className={test.failed ? 'App-failed--color' : null}
                  data-assertid={`${parent.id}-${test.id}-${assert.id}`}
                />
              })}
            </NavItem>
          </NavItem>
        })}
      </div>;
    })}
  </Nav>;
};

export default ReportSidebar;


// const items = props.items.map(parent => <li key={parent.id}>
//   <span className={parent.failed ? 'App-failed--color' : null}>
//     {parent.name}
//   </span>
//
//   <ul>
//     {parent.tests.map(test => <li  key={test.id}>
//       <span className={test.failed ? 'App-failed--color' : null}>
//         {test.name}
//       </span>
//
//       <ul>
//           {test.asserts.map(assert => <li
//             key={assert.id}
//             onClick={props.onAssertClick}
//             className={test.failed ? 'App-failed--color' : null}
//             data-assertid={`${parent.id}-${test.id}-${assert.id}`}
//           >
//             {assert.name}
//           </li>)}
//       </ul>
//     </li>)}
//   </ul>
//
// </li>);
