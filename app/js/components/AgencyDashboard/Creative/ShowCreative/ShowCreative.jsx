import React, { Component } from 'react'

export default class ShowCreative extends Component {
  edit(e) {
    e.preventDefault()
    this.props.onStatusChange({status: 'edit'})
  }
  coverImage(item) {
    return typeof item.TempImage != 'undefined' && item.TempImage != null ? item.TempImage : item.RemoteImage != null ? item.RemoteImage : '/images/icons/blankImage.png'
  }
  render() {
    const item = this.props.item;
    return (
      <li key={this.key} className='formView'>
        <div className="content-wrap">

          <div className="img-wrap">
            <img src={this.coverImage(item)} className="coverImage loading" />

          </div>

          <div className="contentInfo">
              <p className="title">{item.Title}</p>

              <p className="clientName">{item.ClientId}</p>

              <p className="tags">{item.CreativeType}</p>
          </div>

          <div className="icon-wrap">
            <span className="cpw-list-icons">
                <a className="list-icon edit editCreative" href="#" onClick={this.edit.bind(this)}></a>
                <a className="list-icon delete deleteCreative" href="#" data-id=""></a>
            </span>
          </div>

          <span className="contentDate"></span>
        </div>
      </li>
    )
  }
}
