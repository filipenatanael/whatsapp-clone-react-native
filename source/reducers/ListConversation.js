import * as type from '../actions/Types';

const INITIAL_STATE = {}


export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LIST_CONVERSATION_USER:
      return action.payload
    default:
      return state;
  }
}
