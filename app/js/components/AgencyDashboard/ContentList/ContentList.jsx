import React, { Component } from 'react'

import ContentItem from './ContentItem'

import ShowCreative from '../Creative/ShowCreative'
import EditCreative from '../Creative/EditCreative'

export default class ContentList extends Component {
  test(e, other) {
    console.log('middle')
    console.log(e)
    console.log(other)
    console.log(this)
    this.props.onContentSelect({id: 1})
  }
  render() {
    return (
      <div className='listingsRegion content-list'>
        <ul>

          {this.props.items.map(function(item) {
            return (
              <ContentItem key={item.Id} item={item} />
            )
          }.bind(this))}

        </ul>
      </div>
    )
  }
}
