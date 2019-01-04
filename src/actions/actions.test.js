import * as actions from './actions'
import * as types from './actionTypes'
import mockContacts from '../mockData/contacts.json'

describe('actions', () => {
  it('should create an action to receive contacts', () => {
    const contacts = mockContacts
    const expectedAction = {
      contacts,
      type: types.RECEIVE_CONTACTS,
    }
    expect(actions.receiveContacts(contacts)).toEqual(expectedAction)
  })
})