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
        /* dispatch({ type: types.ADD_CONTACT_ERROR, payload: 'User exists!' }) */

        /* Guest email for new contact */
        console.log(email);

        /* Currently authenticated user */
        const { currentUser } = firebase.auth();
        let currentEmailB64 = base64.encode(currentUser.email);

        firebase.database().ref(`/users_of_contacts/${currentEmailB64}`)
               .push({ email, name: 'Name of new contacts' })
               .then(() => console.log('Success!!!'))
               .catch(error => console.log(error))

      } else {
        dispatch({ type: types.ADD_CONTACT_ERROR, payload: 'The user does not exist!' })
      }
    })
  }
}
