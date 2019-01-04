import initialState from './initialState';
import { FETCH_CONTACTS, RECEIVE_CONTACTS } from '../actions/actionTypes';

export default function contacts(state = initialState.contacts, action) {
  let newState;
  switch (action.type) {
    case FETCH_CONTACTS:
      return action;
    case RECEIVE_CONTACTS:
      newState = {
        allContacts: action.contacts,
        favoritedContacts: action.contacts.filter(x=> x.isFavorite),
        fetched: action.contacts !== null,
        otherContacts: action.contacts.filter(x=> x.isFavorite === false)
      }
      return newState;
    default:
      return state;
  }
}