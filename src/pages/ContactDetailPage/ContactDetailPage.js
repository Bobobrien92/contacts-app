import React from 'react'
import PropTypes from 'prop-types'
import PhoneNumberItem from '../../components/PhoneNumberItem'
import GenericContactItem from '../../components/GenericContactItem'
import { formatAddress, parseBirthdate } from '../../utils'
import Header from '../../components/Header'
import { connect } from 'react-redux';
import * as contactActions from '../../actions/actions'
import { bindActionCreators } from 'redux';


class ContactDetailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: null,
      contactId: this.props.match.params.id,
      imageFailed: false,
    }
  }

  componentDidMount() {
    let contact = this.props.contacts.allContacts.find(x => x.id === this.state.contactId)
    this.setState({ contact })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.contacts !== prevState.contacts) {
      return { contacts: nextProps.contacts };
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      this.getContact();
    }
  }

  getContact() {
    let contact = this.props.contacts.allContacts.find(x => x.id === this.state.contactId)
    if (contact) {
      this.setState({contact})
    }
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

  toggleFavorite = () => {
    let contact = this.state.contact
    this.props.contactActions.toggleFavorite(contact)
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
        <Header isDetailsPage isFavorited={contact.isFavorite} onToggle={this.toggleFavorite} />
        <div className="content">
          <div className="contactWrapper">
            {this.state.imageFailed !== true &&
              <img onError={this.imageFailedToLoad} src={contact.largeImageURL} alt={`${contact.name} avatar`} className="largeAvatar" />
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

const mapStateToProps = state => ({
  contacts: state.contacts,
})
const mapDispatchToProps = dispatch => ({
  contactActions: bindActionCreators(contactActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailPage)


ContactDetailPage.propTypes = {
  contacts: PropTypes.object.isRequired,
}