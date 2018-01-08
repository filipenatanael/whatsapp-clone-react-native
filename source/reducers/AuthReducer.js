import * as Constants from '../resources/constants';
import * as types from '../actions/Types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  message: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_EMAIL:
    return { ...state, email: action.payload }
    case types.ADD_PASSWORD:
    return { ...state, password: action.payload }
    case types.ADD_NAME:
    return { ...state, name: action.payload }
    case types.FAILURE_REGISTER:
    switch (action.payload)
    {
      case 'auth/email-already-in-use':
      return { ...state, message: Constants.email_already_in_use }
      case 'auth/invalid-email':
      return { ...state, message: Constants.invalid_email }
      case 'auth/operation-not-allowed':
      return { ...state, message: Constants.operation_not_allowed }
      case 'auth/weak-password':
      return { ...state, message: Constants.weak_password }
      default:
      return { ...state, message: Constants.undefined_register_error }
    }
    case types.SUCCESS_REGISTER:
    return { ...state, name: '' }
    case types.AUTH_SUCCESS:
    return { ...state, email: '', password: '' }
    case types.AUTH_FAILURE:
    switch (action.payload)
    {
      case 'auth/invalid-email':
      return { ...state, message: Constants.invalid_email }
      case 'auth/user-disabled':
      return { ...state, message: Constants.user_disabled }
      case 'auth/user-not-found':
      return { ...state, message: Constants.user_not_found }
      case 'auth/wrong-password':
      return { ...state, message: Constants.wrong_password }
      default:
      return { ...state, message: Constants.undefined_register_error }
    }
    default:
    return state;
  }
}
