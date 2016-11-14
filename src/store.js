import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './devtools/Devtools';


import reducers from './reducers';

export default compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
)(createStore)(reducers);
