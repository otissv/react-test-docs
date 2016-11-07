import React, { Component } from 'react';
import autobind  from 'class-autobind';
import './App.css';
import docs from '../__tests__/docs/docs';
import Nav from './Nav.js';
import notification from './notification';
import Page from './Page.js';


class App extends Component {
  constructor () {
    super(...arguments);
    autobind(this);

    this.state = {
      stats: docs.stats,
      view: <h1>Welcome</h1>
    };
  }

  componentDidMount () {
    notification({
      title: 'Test docs',
      body: docs.stats.failed ? `${docs.stats.failed} failed`: `${docs.stats.passed} passed`,
      icon:  docs.stats.failed ? 'close.png' : 'check.png'
    })
  }

  setView (e) {
    const id = e.currentTarget.dataset.assertid.split('-');
    const item = docs.results[id[0]].tests[id[1] - 1].asserts[id[2]];

    this.setState({ view: <Page item={item} /> });
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Test docs</h2>
          <span className={this.state.stats.failed ?  null: 'App-passed--color'}>
            {this.state.stats.asserts} tests completed{this.state.stats.failed ? ', ' : '.'}
          </span>
          <span className={this.state.stats.failed ?  'App-failed--color' : null}>{this.state.stats.failed ? `${this.state.stats.failed} failed.`: null}</span>
      </div>

      <div className="App-sidebar">
        <ul>
          <Nav
            onParentlick={(e) => e}
            onTestClick={(e) => e}
            onAssertClick={(e) => this.setView(e)}
          />
        </ul>
      </div>

      <div className='App-view'>
        {this.state.view}
      </div>
    </div>;
  }
}

export default App;
