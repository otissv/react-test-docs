import React, { Component } from 'react';
import autobind  from 'class-autobind';
import notification from '../notification';
import '../styles/app.css';
import docs from '../../../__tests__/docs/docs';
import AppNav from './app-component-nav';
import Grid from 'react-uikit-grid';
import AppBrand from './app-component-brand';
import AppStats from './app-component-stats';


class App extends Component {
  constructor () {
    super(...arguments);
    autobind(this);

    this.state = {
      watchTests: true,
      stats: docs.stats
    };
  }


  componentDidMount () {
    if (this.state.playTests) {
      notification({
        title: 'Test docs',
        body: docs.stats.failed ? `${docs.stats.failed} failed`: `${docs.stats.passed} passed`,
        icon:  docs.stats.failed ? 'close.png' : 'check.png'
      });
    }
  }


  toggleTests () {
    if (!this.state.watchTests) {
      notification({
        title: 'Test docs',
        body: docs.stats.failed ? `${docs.stats.failed} failed`: `${docs.stats.passed} passed`,
        icon:  docs.stats.failed ? 'close.png' : 'check.png'
      });
    }

    this.setState({
      watchTests:  !this.state.watchTests
    });
  }


  render () {
    return <div className='App'>
      <Grid widths='1-1' className='App-header'>
        <AppBrand col='1-4' />

        <AppNav col='1-2'/>
        <AppStats
          onClick={this.toggleTests}
          watch={this.state.watchTests}
          col='1-4'
          textAlign='right'
          className={'App-header-stats'}
          {...this.state.stats}
        />
      </Grid>

      {this.props.children}

    </div>;
  }
}

export default App;
