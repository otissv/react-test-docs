import React from 'react';
import autobind  from 'class-autobind';
import Grid from 'react-uikit-grid'
import docs from '../../__tests__/docs/docs';
import ReportSidebar from './report-component-sidebar';
import ReportPage from './report-component-page';


class ReportView extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);

    this.state = {
      reults: [],
      view  : null
    };
  }

  componentWillMount () {
    const testViewId = localStorage.getItem('testViewId')

    this.setState({
      results: docs.results,
      view   : !testViewId ? ['0', '1', '0'] : JSON.parse(testViewId)
    });
  }

  setView (e) {
    const id = e.currentTarget.dataset.assertid.split('-');
    localStorage.setItem('testViewId', JSON.stringify(id));

    this.setState({ view: id });
  }

  componentWillUnmount () {
    localStorage.removeItem('testViewId')
  }


  render () {
    return <Grid widths='1-1'>
      <ReportSidebar
        col='1-4'
        items={this.state.results}
        onAssertClick={this.setView}
      />
      <ReportPage testViewId={this.state.view} results={this.state.results} />
    </Grid>
  }
};

export default ReportView;
