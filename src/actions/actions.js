import * as types from './actionTypes';

function url() {
  return 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json'
}

export const fetchContacts = () => {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => { return response.json();})
      .then(json => {
        dispatch(receiveContacts(json))
      });
  }
}

export const receiveContacts = contacts => {
  return {
    contacts: contacts ? contacts : [],
    type: types.RECEIVE_CONTACTS,
  }
}

export const toggleFavorite = contact => {
  return (dispatch, getState) => {
    let contacts = getState().contacts.allContacts
    let contact = contacts.filter(x=> x.id === contact.id)
    if (contact) {
      contact.isFavorite = !contact.isFavorite

    }
  }
}