import React, { Component } from 'react'

import ShowCreative from '../../Creative/ShowCreative'
import EditCreative from '../../Creative/EditCreative'
import FormatCreative from '../../Creative/FormatCreative'

export default class ContentItem extends Component {
  // constructor(props) {
  //   console.log(props)
  //   this.state = {
  //     status: 'show'
  //   }
  // }
  changeStatus(e) {
    this.setState(e)
  }
  render() {
    if (this.props.view == 'SHOW') {
      return <ShowCreative key={this.key} {...this.props} onStatusChange={this.changeStatus.bind(this)} />
    }
    if (this.props.view == 'EDIT') {
      return <EditCreative key={this.key} {...this.props} onStatusChange={this.changeStatus.bind(this)} />
    }
    if (this.props.view == 'FORMAT') {
      return <FormatCreative key={this.key} {...this.props} onStatusChange={this.changeStatus.bind(this)} />
    }
    else {
      return <ShowCreative key={this.key} {...this.props} onStatusChange={this.changeStatus.bind(this)} />
    }
  }
}
