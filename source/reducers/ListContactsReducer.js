import * as type from './../resources/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  //console.log('Testing: ', action.payload);
  switch(action.type) {
    case type.CONTACTS_LIST:
      return action.payload
    default:
      return state;
  }
}
