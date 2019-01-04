import * as types from './actionTypes'
const API_ENDPOINT = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json'

export const fetchContacts = () => {
  return dispatch => {
    return fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      }
    })
      .then(response => {
        if (response.ok === false) {
          return dispatch(fetchFailed())
        }
        else {
          return response.json().then(json => {
            dispatch(receiveContacts(json))
          })
        }
      })
  }
}

export const fetchFailed = () => {
  return {
    failedToFetch: true,
    type: types.FETCH_FAILED
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
    if (contact) {
      let allContacts = getState().contacts.allContacts
      allContacts = allContacts.filter(x => x.id !== contact.id)
      contact.isFavorite = !contact.isFavorite
      allContacts.push(contact)
      dispatch(updateContacts(allContacts))
    }
  }
}

export const updateContacts = (contacts) => {
  return {
    contacts: contacts ? contacts : [],
    type: types.RECEIVE_CONTACTS,
  }
}