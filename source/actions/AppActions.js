import * as types from './Types';

export const addContact = (email) => {
  return {
    type: types.ADD_CONTACT,
    payload: email
  }
}
