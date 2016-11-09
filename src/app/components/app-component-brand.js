import React from 'react';
import { Link } from 'react-router';
import uikit from 'react-uikit-base';

const AppBrand = (props) =>  {
  const cleanProps = uikit.helpers.cleanProps([])(props)
  return <Link to='/'><h2 {...cleanProps}>Test docs</h2></Link>;
};

export default uikit.base(AppBrand);
