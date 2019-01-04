import React from 'react'
import ContactList from '../../components/ContactList'
import Header from '../../components/Header'

export default class ContactListPage extends React.Component {

  render() {
    return (
      <div className="contactList">
        <Header isDetailsPage={false} />
        <ContactList />
      </div>
    )
  }
}

