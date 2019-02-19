const INITIAL_STATE = {
  email_logged_in: 'filipenatanael1@live.com',
  email_contact: 'Testing@example.com',
  add_contact_error: '',
  add_contact_status: false,
  message: '',
};

import {
  ADD_CONTACT,
  ADD_NEW_CONTACT_ERROR,
  ADD_NEW_CONTACT_SUCCESS,
  CHANGE_MESSAGE,
  SEND_MESSAGE_SUCCESS,
} from '../resources/types';

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case ADD_CONTACT:
        return { ...state, email_contact: action.payload }
     case ADD_NEW_CONTACT_ERROR:
        return { ...state, add_contact_error: action.payload }
     case ADD_NEW_CONTACT_SUCCESS:
        return { ...state, add_contact_status: action.payload, email_contact: '', add_contact_error: '' }
      case CHANGE_MESSAGE:
        return { ...state, message: action.payload }
      case SEND_MESSAGE_SUCCESS:
        return { ...state, message: '' }
     default:
        return state;
   }
}

/*  email_contact -> loginScreen and SingInScreen
    add_contact_error -> AddContactScreen
    add_contact_status -> to control AddContactScreen */
