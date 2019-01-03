import React from 'react'
import { Link } from "react-router-dom";

export default class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact
    }
  }

  getImage = async () => {

  }

  toggleLiked = () => {

  }



  render() {
    return (
      <li className="contactListItemWrapper">
        <Link to={`/contacts/${this.props.contact.id}`} className="contactListItem">
          <img src={this.state.contact.smallImageURL} alt={`${this.state.contact.name} avatar`} className="smallAvatar" />
          <div className="details">
            <div className="starHolder">
              {this.state.contact.isFavorite &&
                <span role="img" aria-label="favorited" className="favoriteEmoji">⭐</span>
              }
            </div>

            <div>
              <div className="contactListName">{this.state.contact.name}</div>
              {this.state.contact.companyName &&
                <div className="contactListCompany">{this.state.contact.companyName}</div>
              }
            </div>
          </div>
        </Link>
      </li>

    )
  }
}