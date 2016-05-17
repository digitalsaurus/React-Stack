import React, { Component } from 'react'

export default class ShowCreative extends Component {
  edit(e) {
    e.preventDefault()
    this.props.onStatusChange({status: 'edit'})
  }
  render() {
    const item = this.props.item;
    return (
      <li key={this.key} className='formView'>
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
