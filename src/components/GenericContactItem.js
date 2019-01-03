import React from 'react'

export default class GenericContactItem extends React.Component {
  render() {
    return (
      <div className="genericContactItem">
        <div className="detailsTitle">{this.props.title}:</div>
        {this.props.children}
      </div>
    )
  }
}