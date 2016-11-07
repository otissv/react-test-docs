import React, { Component } from 'react';


const titlize = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.substr(1, str.length)}`
}

const Page = (props) => {
  const item = props.item;
  const extend = item.extend;
  const itemName = titlize(item.name)
console.log(extend.prop);
  if (item.ok) {
    // Passed test
    const Component = eval('('+extend.component.fn+')');
    const props = extend.component.props;
    // const propTypes = extend.component.propTypes;
    // const firstPropType = Object.keys(propTypes)[0];
    // const initial = { [firstPropType]: firstPropType };
    // const z = propTypes[firstPropType];

    // console.log(z);
    // const xpropTypes = Object.keys(propTypes).reduce((prev, curr) => {
    //   return {
    //     ...prev,
    //     // [curr]: eval('('+propTypes[curr]+')')
    //   };
    // }, initial);


    return <div>
      <h2 className='App-passed--color'>{itemName}: Passed</h2>
      <p>{extend.description}</p>
      <p>Actual: <br/>{item.actual}</p>
      <div>
      <Component {...props}/>

      </div>
      {extend.prop ? extend.prop.description : null}
    </div>
  } else {

    // Failed test
    return <div>
      <h2 className='App-failed--color'>{itemName}: Falied</h2>
      <p>Expected:<br/> {item.expected}</p>
      <p>Actual: <br/>{item.actual}</p>
      <div>
        <h3>Stack trace</h3>
        <pre>{item.error.stack}</pre>
      </div>
    </div>
  }
}

export default Page;
