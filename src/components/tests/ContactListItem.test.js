import React from 'react';
import ReactDOM from 'react-dom';
import ContactListItem from '../ContactListItem';
import {MemoryRouter} from 'react-router'
import Contacts from '../../mockData/contacts.json'

const mockContact = Contacts[0]

describe('ContactListItem', () => {



  it('renders ', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ContactListItem contact={mockContact} />
      </MemoryRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

})