import React from 'react'
//Utils
import { getAllContacts } from '../../api/contactFetcher'
import { sortContactsAlphabeticallyByName } from '../../utils'
//Necessary Components
import ContactListItem from '../../components/ContactListItem'

export default class ContactListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoritedContacts: [],
      otherContacts: [],
      ready: false,
    }
  }

  componentDidMount = async () => {
    const allContacts = await getAllContacts()
    this.setState({
      favoritedContacts: allContacts.filter(x => x.isFavorite === true),
      otherContacts: allContacts.filter(x => x.isFavorite !== true),
      ready: true
    })
  }

  addFavorite = (contact) => {
    let favoritedContacts = this.state.favoritedContacts
    let otherContacts = this.state.otherContacts
    favoritedContacts.push(contact)
    otherContacts = favoritedContacts.filter(x => x.id !== contact.id)
    let sortResult = this.sortContacts(favoritedContacts, otherContacts)
    this.setState({
      favorites: sortResult.favoritedContacts,
      otherContacts: sortResult.otherContacts,
    })
  }

  goToContact = (contact) => {
    window.location = `/contact/${contact.id}`
  }

  removeFavorite = (contact) => {
    let favoritedContacts = this.state.favoritedContacts
    let otherContacts = this.state.otherContacts
    favoritedContacts = favoritedContacts.filter(x => x.id !== contact.id)
    otherContacts.push(contact)
    this.setState({
      favoritedContacts,
      otherContacts
    })
  }

  sortContacts = (favoritedContacts, otherContacts) => {
    favoritedContacts = sortContactsAlphabeticallyByName(favoritedContacts)
    otherContacts = sortContactsAlphabeticallyByName(otherContacts)
    return {
      favoritedContacts,
      otherContacts
    }
  }

  render() {
    if (!this.state.ready) {
      return <div>Loading...</div>
    }
    return (
      <div className="contactList">
        <div className="favoritedContacts">
          {this.state.favoritedContacts && this.state.favoritedContacts.length > 0 &&
            <div>
              <div className="listHeader">
                FAVORITE CONTACTS
              </div>
              <ul className="list">
                {this.state.favoritedContacts.map(contact =>
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
          {this.state.otherContacts && this.state.otherContacts.length > 0 &&
            <ul className="list">
              {this.state.otherContacts.map(contact =>
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

