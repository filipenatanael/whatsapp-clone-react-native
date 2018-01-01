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
