import * as type from '../actions/Types';

const INITIAL_STATE = {
  email_logged_in: 'filipenatanael1@live.com',
  email_contact: 'Testing@example.com',
  add_contact_error: '',
  add_contact_status: false,
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
   switch (action.type) {
     case type.ADD_CONTACT:
        return { ...state, email_contact: action.payload }
     case type.ADD_CONTACT_ERROR:
        return { ...state, add_contact_error: action.payload }
     case type.ADD_CONTACT_SUCCESS:
        return { ...state, add_contact_status: action.payload, email_contact: '', add_contact_error: '' }
      case type.CHANGE_MESSAGE:
        return { ...state, message: action.payload }
     default:
        return state;
   }
}

/*
email_contact -> loginScreen and SingInScreen
add_contact_error -> AddContactScreen
add_contact_status -> to control AddContactScreen
*/
