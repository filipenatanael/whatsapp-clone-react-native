import * as type from './../resources/types';

const INITIAL_STATE = {}

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LIST_CONVERSATION_USER:
      return action.payload
    default:
      return state;
  }
}
