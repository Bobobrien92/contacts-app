import React from 'react'
import {formatPhoneNumber} from '../utils'

export default class PhoneNumberItem extends React.Component {
  render() {
    return (
      <div className="phoneNumberItem">
        <div className="detailsTitle">PHONE:</div>
        <div className="fieldDetails">
          <div className="phoneNumber">{formatPhoneNumber(this.props.number)}</div>
          <div className="phoneTitle">{this.props.title}</div>
        </div>
      </div>
    )
  }
}