import { combineReducers } from 'redux';
import appReducer from './app/app-reducer';


export function mapStateToProps (state) {
  return {
    docs          : state.appReducer.docs,
    openAppSidebar: state.appReducer.openAppSidebar,
    selectedDoc   : state.appReducer.selectedDoc,
    selectedAssert: state.appReducer.selectedAssert,
    watchTests    : state.appReducer.watchTests
  };
}

const rootReducer = combineReducers({
  appReducer
});

export default rootReducer;
