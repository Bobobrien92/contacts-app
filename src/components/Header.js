import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBack: props.showBack || false,
      isFavorited: props.isFavorited || false,
    }
  }

  render() {
    return (
      <div>
        <div style={{ fontColor: '#79797D' }}>
          Header
          </div>
      </div>
    )
  }
}