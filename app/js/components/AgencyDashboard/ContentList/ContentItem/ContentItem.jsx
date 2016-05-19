import React, { Component } from 'react'

import ShowCreative from '../../Creative/ShowCreative'
import EditCreative from '../../Creative/EditCreative'
import FormatCreative from '../../Creative/FormatCreative'

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
      return <ShowCreative key={this.key} item={this.props.item} onStatusChange={this.changeStatus.bind(this)} onDeleteClick={this.props.onDeleteClick} />
    }
    if (this.state.status == 'edit') {
      return <EditCreative key={this.key} item={this.props.item} onStatusChange={this.changeStatus.bind(this)} />
    }
    if (this.state.status == 'format') {
      return <FormatCreative key={this.key} item={this.props.item} onStatusChange={this.changeStatus.bind(this)} />
    }
    else {
      return <ShowCreative key={this.key} item={this.props.item} onStatusChange={this.changeStatus.bind(this)} />
    }
  }
}
