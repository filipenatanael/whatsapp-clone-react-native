const INITIAL_STATE = {
  name: 'John',
  email: 'John@testing.com',
  password: 'John@2018'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.payload }
    case 'ADD_PASSWORD':
      return { ...state, password: action.payload }
    default:
      return state;
  }
}
