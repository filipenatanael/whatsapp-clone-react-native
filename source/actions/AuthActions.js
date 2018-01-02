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

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => successfully())
  .catch(error => unsuccessful(error))
}

const successfully = () => {
  return {
    type: 'Success'
  }
}

const unsuccessful = (error) => {
  return {
    type: 'Error'
  }
}
