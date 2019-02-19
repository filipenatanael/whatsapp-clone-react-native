const INITIAL_STATE = {}

import {
  LIST_CONVERSATION_USER
} from './../resources/types';

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_CONVERSATION_USER:
      return action.payload
    default:
      return state;
  }
}
