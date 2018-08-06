import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';

import * as type from './Types';

/* added to redux */
export const addContact = (email) => {
  return {
    type: type.ADD_CONTACT,
    payload: email
  }
}

export const registerNewContact = (email) => {
  return dispatch => {
    let emailContactB64 = base64.encode(email);

    firebase.database().ref(`/users/${emailContactB64}`)
    .once('value')
    .then(snapshot => {
      if (snapshot.val()) {
        /* Guest email for new contact */
        const userData = _.first(_.values(snapshot.val()));
        /* Currently authenticated user */
        const { currentUser } = firebase.auth();
        let currentEmailB64 = base64.encode(currentUser.email);

        firebase.database().ref(`/users_of_contacts/${currentEmailB64}`)
        .push({ email, name: userData.name })
        .then(() => registerNewContactSuccess(dispatch))
        .catch(error => registerNewContactError(error, dispatch))
      } else {
        dispatch({ type: type.ADD_CONTACT_ERROR, payload: '[App] The user does not exist!' })
      }
    })
  }
}

const registerNewContactError = (error, dispatch) => {
  dispatch(
    {
      type: type.ADD_CONTACT_ERROR,
      payload: error.message
    }
  );
}

const registerNewContactSuccess = dispatch => (
  dispatch(
    {
      type: type.ADD_CONTACT_SUCCESS,
      payload: true
    })
  )

  export const enableInclusionContact = () => (
    {
      type: type.ADD_CONTACT_SUCCESS,
      payload: false
    }
  )

  export const fetchContacts = (emailLoggedIn) => {
    return (dispatch) => {
      firebase.database().ref(`/users_of_contacts/${emailLoggedIn}`)
      .on("value", snapshot => {
        dispatch({
          type: type.CONTACTS_LIST,
          payload: snapshot.val()
        })
      })
    }
  }

  /* Chat component message */
  export const changeMessage = text => {
    return ({
      type: type.CHANGE_MESSAGE,
      payload: text
    })

  }
  export const sendMessage = (message, contactName, contactEmail) => {
    // User information
    const { currentUser } = firebase.auth();
    const userEmail = currentUser.email;

    return dispatch => {
      // Contact information

      // Convert to base64
      const user_email_encode = base64.encode(userEmail);
      const contact_email_encode = base64.encode(contactEmail);

      // Push to firebase (send and receive)
      firebase.database().ref(`/messages/${user_email_encode}/${contact_email_encode}`)
      .push({ message: message, type: 'send' })
      .then(() => {
        firebase.database().ref(`/messages/${contact_email_encode}/${user_email_encode}`)
        .push({ message: message, type: 'receive' })
        .then(() => dispatch({ type: 'SEND_MESSAGE' }))
      })
    }
  }
