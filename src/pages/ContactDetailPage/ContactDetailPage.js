import React from 'react'
//import PropTypes from 'prop-types'
import { getContact } from '../../api/contactFetcher'
import PhoneNumberItem from '../../components/PhoneNumberItem'
import GenericContactItem from '../../components/GenericContactItem'
import { formatAddress, parseBirthdate } from '../../utils'
import Header from '../../components/Header'

export default class ContactDetailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactId: this.props.match.params.id,
      contact: null,
      contactImageUrl: '/assets/userLarge/userLarge.png',
      imageFailed: false,
    }
  }

  async componentDidMount() {
    let contact = await getContact(this.state.contactId)
    this.setState({ contact})
  }

  getPhoneValues(phone) {
    if (phone) {
      var entries = Object.entries(phone)
      return entries
    } else {
      return []
    }
  }

  imageFailedToLoad = () => {
    this.setState({
      imageFailed: true,
    })
  }

  render() {
    if (!this.state.contact && !this.state.ready) {
      return <div>Fetching Contact...</div>
    }
    if (!this.state.contact && this.state.ready) {
      return <div>Contact Not Found</div>
    }
    let contact = this.state.contact
    let address = formatAddress(contact.address)
    return (
      <div className="contactDetailPage">
        <Header isDetailsPage isFavorited={contact.isFavorite} />
        <div className="content">
          <div className="contactWrapper">
            {this.state.imageFailed !== true &&
              <img onError={this.imageFailedToLoad} src={contact.largeImageURL} alt={`${contact.name} avatar`} className="largeAvatar"/>
            }
            {this.state.imageFailed &&
              <div alt={`${contact.name} avatar`} className={"largeAvatar failed "} />
            }
            <div className="contactName">{contact.name}</div>
            <div className="companyName">{contact.companyName}</div>
          </div>

          {contact.phone && contact.phone.home &&
            <PhoneNumberItem number={contact.phone.home} title="HOME" />
          }

          {contact.phone && contact.phone.mobile &&
            <PhoneNumberItem number={contact.phone.mobile} title="MOBILE" />
          }

          {contact.phone && contact.phone.work &&
            <PhoneNumberItem number={contact.phone.work} title="WORK" />
          }

          {contact.address &&
            <GenericContactItem title="ADDRESS">
              <div>
                <div className="detail">{address[0]}</div>
                <div className="detail">{address[1]}</div>
              </div>
            </GenericContactItem>
          }

          {contact.birthdate &&
            <GenericContactItem title="BIRTHDATE">
              <div className="detail">{parseBirthdate(contact.birthdate)}</div>
            </GenericContactItem>
          }

          {contact.emailAddress &&
            <GenericContactItem title="EMAIL">
              <div className="detail">{contact.emailAddress}</div>
            </GenericContactItem>
          }
        </div>
      </div>
    )
  }
}

// ContactDetailPage.propTypes = {
//   id: PropTypes.number,
// }