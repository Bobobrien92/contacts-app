import initialState from './initialState';
import { FETCH_CONTACTS, RECEIVE_CONTACTS, UPDATE_CONTACTS } from '../actions/actionTypes';

export default function contacts(state = initialState.contacts, action) {
  let newState;
  switch (action.type) {
    case FETCH_CONTACTS:
      return action;
    case RECEIVE_CONTACTS:
      newState = {
        allContacts: action.contacts,
        fetched: action.contacts !== null,
      }
      return newState;
    case UPDATE_CONTACTS:
      newState = {
        allContacts: action.contacts,
        fetched: action.contacts !== null,
      }
      return newState;
    default:
      return state;
  }
}