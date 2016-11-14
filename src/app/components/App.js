import React, { Component } from 'react';
import autobind  from 'class-autobind';
import '../styles/app.css';
import Grid from 'react-uikit-grid';
import AppHeader from './App-header';
import AppFooter from './App-footer';
import AppSidebar from './App-sidebar';
import AppMain from './App-main';


class App extends Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }


  render () {
    const props = this.props;
    const stats = props.docs && props.docs.stats;

    const sidebarItems = props.docs ? props.docs.results.map(item => {
      return {
        id: item.id,
        name: item.name,
        failed: item.failed
      }
    }) : [];


    return <Grid className='App'>
      <AppHeader
        col='1-1'
        {...props}
        onOpenSideBar={this.props.onOpenSideBar}
      />
      <AppSidebar
        onNavClose={this.props.onNavClose}
        onNavItemClick={this.props.onNavItemClick}
        items={sidebarItems}
        open={props.openAppSidebar}
      />

      <AppMain col='1-1'>
        {this.props.children}
      </AppMain>

      <AppFooter
        col='1-1'
        onToggle={this.props.onToggleTests}
        watch={this.props.watchTests}
        stats={stats}
      />
    </Grid>;
  }
}

export default App;
