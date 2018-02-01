import * as types from '../actions/Types';

const INITIAL_STATE = {
  email_contact: 'Testing@example.com',
  add_contact_error: '',
  add_contact_status: false,
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case types.ADD_CONTACT:
        return { ...state, email_contact: action.payload }
     case types.ADD_CONTACT_ERROR:
        return { ...state, add_contact_error: action.payload }
     case types.ADD_CONTACT_SUCCESS:
        return { ...state, add_contact_status: true }
     default:
        return state;
   }
}
