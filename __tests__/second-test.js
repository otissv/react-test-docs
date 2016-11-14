
import React from 'react';
import assertions from './helpers/assertions';
import Hello from '../src/hello/hello';


const test = assertions();


test('Second File', nested => {
  nested.test('Second prop',
    assert => {

    const props = { greet: 'Hello', who: 'World!' };

    const actual = { component: Hello, props };
    const expect = <div className='greeting hello'><h1>ello, World!</h1></div>;

    assert.equalsJSX(actual, expect,
      'This is the second file', {
        description:'This component is meant to throw an error due to the fact that the actual does not match what was expected.',
        main: true,
        props:  [{
            prop: 'greet',
            type: 'string',
            required: true,
            description: 'Greet prop adds a custom greet'
        }]
      });
    assert.end();
  });
});
