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

  imageFailedToLoad = () => {
    this.setState({
      imageFailed: true,
    })
  }

  toggleLiked = () => {

  }



  render() {
    let contact = this.props.contact
    return (
      <li className="contactListItemWrapper">
        <Link to={`/contacts/${this.props.contact.id}`} className="contactListItem">
          {this.state.imageFailed !== true &&
            <img onError={this.imageFailedToLoad} src={contact.smallImageURL} alt={`${contact.name} avatar`} className="smallAvatar" />
          }
          {this.state.imageFailed &&
            <div alt={`${contact.name} avatar`} className={"smallAvatar failed "} />
          }
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