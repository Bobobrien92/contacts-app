import initialState from './initialState';
import { FETCH_CONTACTS, FETCH_FAILED, RECEIVE_CONTACTS, UPDATE_CONTACTS } from '../actions/actionTypes';

export default function contacts(state = initialState.contacts, action) {
  let newState;
  switch (action.type) {
    case FETCH_CONTACTS:
      newState = {
        allContacts: action.contacts,
        fetched: action.contacts !== null,
      }
      return action;
    case FETCH_FAILED:
      newState = {
        failedToFetch: true,
      }
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