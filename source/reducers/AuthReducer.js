const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  message: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.payload }
    case 'ADD_PASSWORD':
      return { ...state, password: action.payload }
    case 'ADD_NAME':
      return { ...state, name: action.payload }
    case 'FAILURE_REGISTER':
        return { ...state, message: action.payload }
    default:
      return state;
  }
}
