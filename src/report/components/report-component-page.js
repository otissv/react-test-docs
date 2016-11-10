import React from 'react';
import uikit from 'react-uikit-base';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';


const titlize = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.substr(1, str.length)}`
}


const Page = (props) => {
  const id = props.testViewId;
  const item =  props.results[id[0]].tests[id[1] - 1].asserts[id[2]];

  if (!item) return <div></div>;

  const extend = item.extend;
  const itemName = titlize(item.name);
  /* eslint-disable no-eval */
  const Component = extend ? eval('('+extend.component.fn+')') : <div></div>;
  /* eslint-enable no-eval */


  let propTypes = null;

  if (extend.props) {
    propTypes = <section className='App-section'>
      <Table
        caption='Components props'
        head={['Prop', 'Type', 'Required', 'Description']}
        body={extend.props.map(i => {
          return { ...i, required: i.required ? 'Yes' : 'No' }
        })}
      />
    </section>;
  }

  let stackTrace: null

  if (item.error && item.error.stack) {
    stackTrace = <div>
      <h3>Stack trace</h3>

      <Codeblock>{item.error.stack}</Codeblock>
    </div>;
  }


  return <div>
    <section className='App-section'>
      <h2 className={item.ok ? 'App-passed--color' :'App-failed--color'}>
        {itemName}: {item.ok ? 'Passed' : 'Failed'}
      </h2>

      <p>{extend.description}</p>
      {stackTrace}

    </section>

    <section className='App-section'>
      <Component {...extend.component.props}/>
    </section>

    <section className='App-section'>
      <label>Expected:</label>
      <Codeblock>{item.expected}</Codeblock>

      <label>Actual:</label>
      <Codeblock>{item.actual}</Codeblock>
    </section>

    {propTypes}
  </div>
}

export default uikit.base(Page);


/* <div className="App-sidebar">
  <ul>
    <Nav
      onParentlick={(e) => e}
      onTestClick={(e) => e}
      onAssertClick={(e) => this.setView(e)}
    />
  </ul>
</div> */
