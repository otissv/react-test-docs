import React from 'react';

const Hello = (props) => <div className='greeting hello'>
  <h1>{props.greet ? props.greet : 'Hello'}, {props.who ? props.who : 'World!'}</h1>
</div>;


Hello.propTypes = {
  greet: React.PropTypes.string,
  who:   React.PropTypes.string.isRequired
}

export default Hello;
