import React from 'react';
import { connect } from 'react-redux';
import autobind  from 'class-autobind';
import actions from '../actions';
import { mapStateToProps } from '../reducers';
import App from './components/App.js';
import notification from '../shared/notification';

class AppContainer extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }


  componentWillMount () {
    this.props.getDocs();
  }


  onNavItemClick (e) {
    const id = parseInt(e.currentTarget.dataset.appnavid, 10);
    const doc = this.props.docs.results.filter(item => item.id === id);

    this.props.setDoc(doc[0]);
    this.props.setOpenAppSidebar(false);
    this.props.setAsserId(null)
  }


  onNavClose () {
    this.props.setOpenAppSidebar(false);
  }


  onOpenSideBar (e) {
    const {
      setOpenAppSidebar,
      openAppSidebar
    } = this.props;

    setOpenAppSidebar(!openAppSidebar);
  }


  onToggleTests () {
    const stats = this.props.docs.stats;

    if (!this.props.watchTests) {
      notification({
        title: 'Test docs',
        body: stats.failed ? `${stats.failed} failed`: `${stats.passed} passed`,
        icon:  stats.failed ? 'close.png' : 'check.png'
      });
    }

    this.props.toggleTests(!this.props.watchTests);
  }


  render () {
    return <App
      {...this.props}
      onNavItemClick={this.onNavItemClick}
      onNavClose={this.onNavClose}
      onToggleTests={this.onToggleTests}
      onOpenSideBar={this.onOpenSideBar}
    />;
  }
};

// AppContainer.propTypes = {
// };

export default connect(mapStateToProps, actions)(AppContainer);
