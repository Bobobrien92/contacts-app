import React from 'react'
import { sortContactsAlphabeticallyByName } from '../utils'
import ContactListItem from './ContactListItem'
import {connect} from 'react-redux';
import * as contactActions from '../actions/actions';
import {bindActionCreators} from 'redux';


class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
    }
  }

  componentDidMount = async () => {
    if (!this.props.contacts || !this.props.contacts.allContacts) {
      this.props.contactActions.fetchContacts()
    }
  }

  goToContact = (contact) => {
    window.location = `/contact/${contact.id}`
  }

  sortContacts = (favoritedContacts, otherContacts) => {
    favoritedContacts = favoritedContacts ? sortContactsAlphabeticallyByName(favoritedContacts) : []
    otherContacts = otherContacts ? sortContactsAlphabeticallyByName(otherContacts) : []
    return {
      favoritedContacts,
      otherContacts
    }
  }

  render() {
    if (!this.props.contacts.fetched === true) {
      return <div>Loading...</div>
    }
    let {
      favoritedContacts,
      otherContacts
    } = this.sortContacts(this.props.contacts.favoritedContacts, this.props.contacts.otherContacts)

    return (
      <div className="contactList">
        <div className="favoritedContacts">
          {favoritedContacts && favoritedContacts.length > 0 &&
            <div>
              <div className="listHeader">
                FAVORITE CONTACTS
              </div>
              <ul className="list">
                {favoritedContacts.map(contact =>
                  <ContactListItem
                    contact={contact}
                    isFavorited={true}
                    key={contact.id}
                  />
                )}
              </ul>
            </div>
          }
        </div>
        <div className="otherContacts">
          <div className="listHeader">
            OTHER CONTACTS
          </div>
          {otherContacts && otherContacts.length > 0 &&
            <ul className="list">
              {otherContacts.map(contact =>
                <ContactListItem
                  contact={contact}
                  isFavorited={true}
                  key={contact.id}
                />
              )}
            </ul>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
})

const mapDispatchToProps = dispatch => ({
  contactActions: bindActionCreators(contactActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)