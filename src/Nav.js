import React, { Component } from 'react';
import docs from '../__tests__/docs/docs';

const Nav = (props) => {
  const items = docs.results.map(parent => <li key={parent.id}>
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

  return <ul>{items}</ul>
};

export default Nav;
