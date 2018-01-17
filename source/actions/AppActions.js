import firebase from 'firebase';
import base64 from 'base-64';
import * as types from './Types';

export const addContact = (email) => {
  return {
    type: types.ADD_CONTACT,
    payload: email
  }
}

export const registerNewContact = (email) => {
  return dispatch => {
    let EmailEncode = base64.encode(email);

    firebase.database().ref(`/users/${EmailEncode}`)
    .once('value')
    .then(snapshot => {
      if (snapshot.val()) {
        dispatch({ type: types.ADD_CONTACT_ERROR, payload: 'User exists!' })
      } else {
        dispatch({ type: types.ADD_CONTACT_ERROR, payload: 'The user does not exist!' })
      }
    })
  }
}
