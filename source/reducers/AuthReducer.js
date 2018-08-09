import * as Constants from '../resources/constants';
import * as type from '../resources/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  message: '',
  signInLoading: false,
  signUpLoading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.ADD_EMAIL:
    return { ...state, email: action.payload }
    case type.ADD_PASSWORD:
    return { ...state, password: action.payload }
    case type.ADD_NAME:
    return { ...state, name: action.payload }
    case type.FAILURE_REGISTER:
    switch (action.payload)
    {
      case 'auth/email-already-in-use':
      return { ...state, message: Constants.email_already_in_use, signUpLoading: false }
      case 'auth/invalid-email':
      return { ...state, message: Constants.invalid_email, signUpLoading: false }
      case 'auth/operation-not-allowed':
      return { ...state, message: Constants.operation_not_allowed, signUpLoading: false }
      case 'auth/weak-password':
      return { ...state, message: Constants.weak_password, signUpLoading: false }
      default:
      return { ...state, message: Constants.undefined_register_error, signUpLoading: false }
    }
    case type.SUCCESS_REGISTER:
    return { ...state, name: '' }
    case type.AUTH_SUCCESS:
    return { ...state, email: '', password: '' }
    case type.AUTH_FAILURE:
    switch (action.payload)
    {
      case 'auth/invalid-email':
      return { ...state, message: Constants.invalid_email, signInLoading: false }
      case 'auth/user-disabled':
      return { ...state, message: Constants.user_disabled, signInLoading: false }
      case 'auth/user-not-found':
      return { ...state, message: Constants.user_not_found, signInLoading: false }
      case 'auth/wrong-password':
      return { ...state, message: Constants.wrong_password, signInLoading: false }
      default:
      return { ...state, message: Constants.undefined_register_error, signInLoading: false }
    }
    case type.SIGN_IN_LOADING:
    return { ...state, signInLoading: true }
    case type.SIGN_UP_LOADING:
    return { ...state, signUpLoading: true }
    default:
    return state;
  }
}
