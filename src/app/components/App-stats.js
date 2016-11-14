import React from 'react';
import uikit from 'react-uikit-base';
import Button from 'react-uikit-button';


const AppStats= (props) =>  {
  const { asserts, failed, watch, onToggle } = props;
  const cleanProps = uikit.helpers.cleanProps([
    'asserts', 'failed', 'passed', 'watch'
  ])({
    ...props,
    onToggle: null,
    failed: null,
    passed: null,
    watch: null
  });

  return <div {...cleanProps}>
    <span className={failed ?  null: 'App-passed--color'}>
      {asserts} tests{failed ? ', ' : ''}
    </span>

    <span className={failed ?  'App-failed--color' : null}>{failed ? `${failed} failed.`: null}</span>

    <Button
      onClick={onToggle}
      size='mini'
      context={props.watch ? 'success': null }
      margin='left'
      className={watch  ? 'App-play App-play--wathching' : 'App-play App-play--paused'}
    >
      {props.watch ? 'Watching' : 'Paused'}
    </Button>
  </div>
};

export default uikit.base(AppStats);
