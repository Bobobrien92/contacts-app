import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
    }
  }

  imageFailedToLoad = () => {
    this.setState({
      imageFailed: true,
    })
  }

  render() {
    let contact = this.props.contact
    return (
      <li className="contactListItemWrapper">
        <Link to={`/contacts/${contact.id}`} className="contactListItem">
          {this.state.imageFailed !== true &&
            <img onError={this.imageFailedToLoad} src={contact.smallImageURL} alt={`${contact.name} avatar`} className="smallAvatar" />
          }
          {this.state.imageFailed &&
            <div alt={`${contact.name} avatar`} className={"smallAvatar failed "} />
          }
          <div className="details">
            <div className="starHolder">
              {contact.isFavorite &&
                <span role="img" aria-label="favorited" className="favoriteEmoji">⭐</span>
              }
            </div>

            <div>
              <div className="contactListName">{contact.name}</div>
              {contact.companyName &&
                <div className="contactListCompany">{contact.companyName}</div>
              }
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
}