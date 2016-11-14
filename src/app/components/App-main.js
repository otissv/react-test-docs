import React from 'react';
import Grid from 'react-uikit-grid';
import uikit, { helpers } from 'react-uikit-base';


const AppMain = (props) => {
  const cleanProps = helpers.cleanProps([])(props);

  return <div {...cleanProps} className='App-main'>
      {props.children}
  </div>;
};


export default uikit.base(AppMain);
