import React from 'react';
import uikit from 'react-uikit-base';
import Button from 'react-uikit-button';


const AppStats= (props) =>  {
  const { asserts, failed } = props;
  const cleanProps = uikit.helpers.cleanProps([
    'asserts', 'failed', 'passed', 'watch'
  ])({
    ...props,
    failed: null,
    passed: null,
    watch: null
  });

  return <div {...cleanProps}>
    <span className={failed ?  null: 'App-passed--color'}>
      {asserts} tests{failed ? ', ' : ''}
    </span>
    <Button
      onClick={props.onClick}
      context='link'
      className='App-play--color'
    >
      {props.watch ? 'Watch' : 'Pause'}
    </Button>
    <span className={failed ?  'App-failed--color' : null}>{failed ? `${failed} failed.`: null}</span>
  </div>
};

export default uikit.base(AppStats);
