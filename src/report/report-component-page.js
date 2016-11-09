import React from 'react';


const titlize = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.substr(1, str.length)}`
}

const Page = (props) => {
  const id = props.testViewId;
  const item =  props.results[id[0]].tests[id[1] - 1].asserts[id[2]];

  if (!item) return <div></div>;

  const extend = item.extend;
  const itemName = titlize(item.name)

  if (item.ok) {
    // Passed test
    /* eslint-disable no-eval */
    const Component = eval('('+extend.component.fn+')');
    /* eslint-enable no-eval */

    const props = extend.component.props;

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


/* <div className="App-sidebar">
  <ul>
    <Nav
      onParentlick={(e) => e}
      onTestClick={(e) => e}
      onAssertClick={(e) => this.setView(e)}
    />
  </ul>
</div> */
