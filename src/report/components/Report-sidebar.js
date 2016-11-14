import React from 'react';
import uikit from 'react-uikit-base';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';
import '../styles/report.css';
import titlize from '../../shared/titlize';
import Icons from 'react-uikit-icons';


const ReportSidebar = (props) => {
  if (!props.parent) return <div></div>;

  const { parent } = props;
  const cleanProps = uikit.helpers.cleanProps([
    'items',
    'onAssertNavClick'
  ])(props);

  const failedIcon = <Icons
    className='ReportSidebar-link--failed'
    icon='times'
  />;

  return <Nav
    {...cleanProps}
    parent type='side'
    col={props.col}
  >
    <div key={parent.id}>
      <NavItem
        className='Report-sidebar-header'
        body={parent.name}
        href='#'
        type='header'
      />
      { parent.tests.map(test => {
        return <li
          className='ReportSidebar-label'
          key={test.id}
        >
          {titlize(test.name)}
          <ul>
            {test.asserts.map(assert => {
              return <NavItem
                key={assert.id}
                body={<span>{test.failed ? failedIcon : null} {assert.name}</span>}
                onClick={props.onAssertNavClick}
                className={test.failed ? 'ReportSidebar-link--failed' : 'ReportSidebar-link'}
                data-assertid={`${parent.id}-${test.id}-${assert.id}`}
              />
            })}
          </ul>
        </li>
      })}
    </div>;

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
