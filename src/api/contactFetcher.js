const API_URL = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json'
const contacts = require('../mockData/contacts.json')


export const getAllContacts = async () => {
  return contacts
}