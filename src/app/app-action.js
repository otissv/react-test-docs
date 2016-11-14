import docs from '../../__tests__/docs/docs';


import {
  GET_DOCS,
  SET_DOC,
  GET_OPEN_APP_SIDEBAR,
  SET_OPEN_APP_SIDEBAR,
  SET_ASSERT_ID,
  WATCH_TESTS
} from '../constants';


export function getDocs () {
  return {
    type: GET_DOCS,
    payload: docs
  };
}

export function setDoc (doc) {
  return {
    type: SET_DOC,
    payload: doc
  };
}


export function setOpenAppSidebar (bool) {
  return {
    type: SET_OPEN_APP_SIDEBAR,
    payload: bool
  };
}



WATCH_TESTS
export function setAsserId (id) {
  const assert = typeof id !== 'string'
    ? id
    : id.split('-').map(i => parseInt(i));

  return {
    type: SET_ASSERT_ID,
    payload: assert
  };
}

export function toggleTests (bool) {
  return {
    type: WATCH_TESTS,
    payload: bool
  };
}
