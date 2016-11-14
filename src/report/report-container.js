import React from 'react';
import { connect } from 'react-redux';
import autobind  from 'class-autobind';
import actions from '../actions';
import { mapStateToProps } from '../reducers';
import ReportView from './components/Report-view';


class ReportContainer extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }

  componentWillMount () {
    if (!this.props.selectedDoc) {
      this.props.setDoc(this.props.docs.results[0]);
    }
  }

  handleAssertNavClick (e) {
    const id = e.currentTarget.dataset.assertid;
    this.props.setAsserId(id);
  }

  render () {
    return <ReportView
      onAssertNavClick={this.handleAssertNavClick}
      {...this.props}
      />;
  }
};

// ReportContainer.propTypes = {
// };

export default connect(mapStateToProps, actions)(ReportContainer);
