
import React from 'react';
import assertions from './helpers/assertions';
import Hello from '../src/hello/hello';


const test = assertions();


test('Hello Component', nested => {
  nested.test('greet prop',
    assert => {

    const props = { greet: 'Hello', who: 'World!' };

    const actual = { component: Hello, props };
    const expect = <div className='greeting hello'><h1>Hello, World!</h1></div>;

    assert.equalsJSX(actual, expect,
      'Should not render component', {
        description:'This component is meant to throw an error due to the fact that the actual does not match what was expected.',
        props: {
          greet: { type: 'string', required: true, description: 'Greet prop adds a custom greet' }
        }
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
      'Correctly renders component', { el: 'otis'});
    assert.end();
  });


  nested.test('has class1',
    assert => {
    const Component = () => <div className='greeting hello'><h1>Hello, world!</h1></div>;

    assert.hasClass({ component: Component },
      'div.greeting', 'hello', 'has class hello', {
      description: 'Component shoud have class hello'
    });

    assert.end();
  });
});


// test('Another Component', nested => {
//   nested.test('another comp2',
//     assert => {
//     const Component = () => <div className='greeting hello'><h1>Hello, world!</h1></div>;
//
//     const expect = <div className='greeting hello'><h1 >Hello, world!</h1></div>;
//
//     assert.equalsJSX(Component, expect,
//       'this is test 2', { el: 'otis'});
//     assert.end();
//   });
//
//
//
//   nested.test('another has class 2',
//     assert => {
//     const Component = () => <div className='greeting hello'><h1>Hello, world!</h1></div>;
//
//     assert.hasClass(Component, 'div.greeting', 'hello', 'all good 2');
//
//     assert.end();
//   });
// });
