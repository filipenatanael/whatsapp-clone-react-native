const INITIAL_STATE = {}

import {
  CONTACTS_LIST
} from './../resources/types';

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CONTACTS_LIST:
      return action.payload
    default:
      return state;
  }
}
