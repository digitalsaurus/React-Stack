import React, { Component } from 'react'

import ShowCreative from '../../Creative/ShowCreative'
import EditCreative from '../../Creative/EditCreative'

export default class ContentItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'show'
    }
  }
  changeStatus(e) {
    this.setState(e)
  }
  render() {
    if (this.state.status == 'show') {
      return <ShowCreative item={this.props.item} onStatusChange={this.changeStatus.bind(this)} />
    }
    else {
      return <EditCreative />
    }
  }
}
