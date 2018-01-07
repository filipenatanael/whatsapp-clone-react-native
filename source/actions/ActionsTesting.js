import firebase from 'firebase';

/*
[Testing] ActionCreator to testing
*/
export const currentUserTesting = () => {

  const { currentUser } = firebase.auth();
  const currentEmail = currentUser.email;

  firebase.auth().sendPasswordResetEmail(currentEmail)
  .then(success => console.log('We sent an email with password reset link...'))
  .catch(error => console.log(error));
  return currentEmail;

}
