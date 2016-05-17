import React, { Component } from 'react'

import EditCreative from '../Creative/EditCreative'

export default class ContentList extends Component {
  render() {
    console.log(this);
    return (
      <div className='listingsRegion content-list'>
        <ul>

          {this.props.items.map(function(item) {
            return (
              <li key={item.id} className='formView'>
                <div className="content-wrap">

                  <div className="img-wrap">
                      <img src={item.coverImage} className="coverImage loading" />
                  </div>

                  <div className="contentInfo">
                      <p className="title">{item.title}</p>

                      <p className="clientName">{item.clientId}</p>

                      <p className="tags">{item.creativeType}</p>
                  </div>

                  <div className="icon-wrap">
                    <span className="cpw-list-icons">
                        <a className="list-icon edit editCreative" href="#" data-id=""></a>
                        <a className="list-icon delete deleteCreative" href="#" data-id=""></a>
                    </span>
                  </div>

                  <span className="contentDate"></span>
                </div>
              </li>
            )
          })}

        </ul>
      </div>
    )
  }
}
