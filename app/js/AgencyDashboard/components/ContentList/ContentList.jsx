import React, { Component } from 'react'

import ContentItem from './ContentItem'

import ShowCreative from '../Creative/ShowCreative'
import EditCreative from '../Creative/EditCreative'

export default class ContentList extends Component {
  render() {
    const { items, ...other } = this.props
    return (
      <div className='listingsRegion content-list'>
        <ul>

          {items.map(function(item) {
            return (
              <ContentItem key={item.Id} {...item} {...other} />
            )
          }.bind(this))}

        </ul>
      </div>
    )
  }
}
