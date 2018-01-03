import firebase from 'firebase';

export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    payload: name
  }
}
export const addEmail = (email) => {
  return {
    type: 'ADD_EMAIL',
    payload: email
  }
}
export const addPassword = (password) => {
  return {
    type: 'ADD_PASSWORD',
    payload: password
  }
}


export const registerUser = ({ name, email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => successfully(dispatch))
    .catch(error => unsuccessful(error, dispatch))
  }
}

const successfully = (dispatch) => {
  dispatch({ type: 'SUCCESS_REGISTER' })
}

const unsuccessful = (error, dispatch) => {
  dispatch({ type: 'FAILURE_REGISTER', payload: error.message })
}
