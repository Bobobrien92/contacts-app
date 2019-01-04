import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBack: props.showBack || false,
      isFavorited: props.isFavorited || false,
    }
  }

  toggleFavorite = () => {
    this.setState({
      isFavorited: !this.state.isFavorited
    })
    if (this.props.onToggle) {
      this.props.onToggle()
    }
  }

  render() {
    return (
      <div className="header">
        {this.props.isDetailsPage &&
          <div className="headerDetails">
            <Link to={`/`}>
              <span className="backBtn">
                <div className="backBtnChevron">&#8249;</div>
                <div className="backBtnText">Contacts</div>
              </span>
            </Link>
            <button onClick={this.toggleFavorite} className="headerFavHolder">
              <div className={this.state.isFavorited ? 'star favStar' : ' star otherStar'} alt={this.state.isFavorited ? 'Favorited' : 'Other'} />
            </button>
          </div>
        }
        {!this.props.isDetailsPage &&
          <div className="headerTitle">Contacts</div>
        }
      </div>
    )
  }
}

Header.propTypes = {
  isDetailsPage: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
}