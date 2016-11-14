
import React from 'react';
import assertions from './helpers/assertions';
import Hello from '../src/hello/hello';


const test = assertions();


test('First file', nested => {
  nested.test('comp1',
    assert => {

    const props = { greet: 'Hello', who: 'World!' };

    const actual = { component: Hello, props };
    const expect = <div className='greeting hello'><h1>Hello, World!</h1></div>;

    assert.equalsJSX(actual, expect,
      'Should not render component', {
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


  nested.test('comp2',
    assert => {
    const Component = (props) => <div className='greeting hello'><h1>{props.greet}</h1></div>;
    const props = { greet: 'Hello, world!' };

    const actual = { component: Component, props };
    const expect = <div className='greeting hello'><h1>Hello, world!</h1></div>;

    assert.equalsJSX(actual, expect,
      'Correctly renders component', {
        description: 'This component is meant to throw an error due to the fact that the actual does not match what was expected.',
        props: [{
            prop: 'greet',
            type: 'string',
            required: true,
            description: 'Greet prop adds a custom greet'
        }]
      });
    assert.end();
  });


  nested.test('comp3',
    assert => {
    const Component = () => <div className='greeting hello'><h1>Hello, world!</h1></div>;

    assert.hasClass({ component: Component },
      'div.greeting', 'hello', 'has class hello', {
      description: 'Component shoud have class hello'
    });

    assert.end();
  });
});
