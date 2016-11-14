import React from 'react';
import Grid from 'react-uikit-grid'

import ReportSidebar from './Report-sidebar';
import ReportPage from './Report-page';
import '../styles/report.css';


const ReportView = (props) => {
  const assertId = props.selectedAssert;

  let asserts;

  if (props.selectedDoc && assertId) {
    asserts = props.selectedDoc.tests.filter(t => assertId[1] === t.id)[0].asserts[assertId[2]];
  } else {
    asserts = props.selectedDoc && props.selectedDoc.tests[0].asserts[0]
  }

  const sidebarItems = asserts ? props.selectedDoc : null;

  return <Grid
    className="ReportView"
    widths='1-1'
  >
    <ReportSidebar
      col='1-4'
      parent={sidebarItems}
      onAssertNavClick={props.onAssertNavClick}
    />
    <ReportPage col='3-4' asserts={asserts} />
  </Grid>;

};

export default ReportView;
