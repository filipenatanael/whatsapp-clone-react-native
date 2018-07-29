import * as types from '../actions/Types';

const INITIAL_STATE = {
  email_logged_in: 'filipenatanael1@live.com',
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
        return { ...state, add_contact_status: action.payload, email_contact: '', add_contact_error: '' }
     default:
        return state;
   }
}

/*
email_contact -> loginScreen and SingInScreen
add_contact_error -> AddContactScreen
add_contact_status -> to control AddContactScreen
*/
