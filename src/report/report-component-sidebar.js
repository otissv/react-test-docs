import React from 'react';
import uikit from 'react-uikit-base';

const ReportSidebar = (props) => {
  const cleanProps = uikit.helpers.cleanProps([
    'items',
    'onAssertClick'
  ])(props);

  const items = props.items.map(parent => <li key={parent.id}>
    <span className={parent.failed ? 'App-failed--color' : null}>
      {parent.name}
    </span>

    <ul>
      {parent.tests.map(test => <li  key={test.id}>
        <span className={test.failed ? 'App-failed--color' : null}>
          {test.name}
        </span>

        <ul>
            {test.asserts.map(assert => <li
              key={assert.id}
              onClick={props.onAssertClick}
              className={test.failed ? 'App-failed--color' : null}
              data-assertid={`${parent.id}-${test.id}-${assert.id}`}
            >
              {assert.name}
            </li>)}
        </ul>
      </li>)}
    </ul>

  </li>);

  return <ul {...cleanProps}>{items}</ul>
};

export default ReportSidebar;
