import {
  GET_DOCS,
  SET_DOC,
  SET_OPEN_APP_SIDEBAR,
  SET_ASSERT_ID,
  WATCH_TESTS
} from '../constants';


const INITAL_STATE = {
  docs          : null,
  selectedDoc   : null,
  openAppSidebar: false,
  selectedAssert: null,
  watchTests    : true
};

export default function appReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case GET_DOCS:
      return {...state, docs: action.payload};

    case SET_DOC:
      return {...state, selectedDoc: action.payload};

    case SET_OPEN_APP_SIDEBAR:
      return {...state, openAppSidebar: action.payload};

    case SET_ASSERT_ID:
      return {...state, selectedAssert: action.payload};

    case WATCH_TESTS:
      return {...state, watchTests: action.payload};

    default:
      return state;
  }
}
