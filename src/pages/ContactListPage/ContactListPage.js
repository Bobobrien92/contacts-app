import React from 'react'
import { getAllContacts } from '../../api/contactFetcher'

export default class ContactListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
      ready: false,
    }
  }

  componentDidMount = async () => {
    const allContacts = await getAllContacts()
    this.setState({
      allContacts,
      ready: true
    })
  }

  goToContact = (contact) => {
    window.location = `/contact/${contact.id}`
  }

  render() {
    if (!this.state.ready) {
      return <div>Loading...</div>
    }
    return (
      <div className="contactList">
        {this.state.allContacts.map(contact =>
          <div
            key={contact.id}
            onClick={() => this.goToContact(contact)}
          >
            {contact.id}
          </div>
        )}
      </div>

    )
  }
}

