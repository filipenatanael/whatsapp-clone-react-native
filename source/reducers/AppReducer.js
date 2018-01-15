import * as types from '../actions/Types';

const INITIAL_STATE = {
  emailContact: 'Testing@example.com'
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case types.ADD_CONTACT:
     return { ...state, emailContact: action.payload }
     default:
     return state;
   }
}
