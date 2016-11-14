import React from 'react';
import uikit from 'react-uikit-base';
import Grid from 'react-uikit-grid';
import AppBrand from './App-brand';
import AppStats from './App-stats';
import AppNav from './App-nav';


const AppFooter = (props) => (
  <footer className='App-footer'>
    <Grid>
      <AppBrand col='1-5' />

      <AppStats
        onToggle={props.onToggle}
        watch={props.watch}
        col='4-5'
        textAlign='right'
        className={'App-stats'}
        {...props.stats}
      />
    </Grid>
  </footer>
);

export default uikit.base(AppFooter);
