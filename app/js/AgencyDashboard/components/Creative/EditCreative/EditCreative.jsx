import React, { Component } from 'react'
import EditControls from '../../../containers/EditContent.jsx'

export default class EditCreative extends Component {
  show(e) {
    e.preventDefault()
    this.props.onStatusChange({status: 'show'})
  }
  coverImage(item) {
    return typeof item.TempImage != 'undefined' && item.TempImage != null ? item.TempImage : item.RemoteImage != null ? item.RemoteImage : '/images/icons/blankImage.png'
  }
  mediaEdit(item) {
    if (item.EmbeddableMedia != '' && (typeof item.TempFile == 'undefined' || item.TempFile == null)) {
      return (
        <div>
          <input type="text" id="EmbeddableMedia" placeholder="Embeddable Media" data-field="EmbeddableMedia" disabled />
          <a href="#change-media" class="change-media">Change media</a>
        </div>
      )
    }
    else {
      return (
        <div>
          <input type="hidden" id="EmbeddableMedia" placeholder="Embeddable Media" value="" disabled />
          <a href="#change-media" class="change-media">Change media</a>
        </div>
      )
    }
  }
  render() {
    const item = this.props
    return (
      <li key={this.key} className='formView edit'>
        <div className="content-wrap">
          <div className="mediaWrap">
              <div className="input-wrap media">
                  <span className="cover-wrap">
                      <img src={this.coverImage(item)} width="250" height="150" className="coverImage" />
                  </span>

                  {this.mediaEdit(item)}

              </div>
            </div>

            <div className="contentInfo">
              <div className="input-wrap">
                <input type="text" id="Title" className="title" placeholder="Title" value={item.Title} />
              </div>

              <div className="input-wrap">
                <textarea value={item.ShortDescription} />
              </div>

              <div className="input-wrap select">
                  <span className="select-area">
                      <span className="left"></span>
                      <span className="center">Client</span>
                      <a className="select-opener"></a>
                      <select name="Client" placeholder="Client" className="target" id="Client" aria-invalid="false">
                      </select>
                  </span>
              </div>

              <select className="form-control">
                <option>1</option>
                <option>2</option>
              </select>

            </div>

              <EditControls Id={item.Id} />

            </div>
          </li>
      // <li>
      //   <div className="content-wrap">
      //     <div className="mediaWrap">
      //         <div className="input-wrap media">
      //             <span className="cover-wrap">
      //                 <img src={item.coverImage != null || item.coverImage != '' ? item.coverImage : '/images/profilecreationwizard/image_large.png'} width="250" height="150" className="coverImage" />
      //             </span>
      //
      //             // if(EmbeddableMedia != '' && (typeof TempFile == 'undefined' || TempFile == null)) {
      //             //
      //             //     <input type="text" id="EmbeddableMedia" placeholder="Embeddable Media" data-field="EmbeddableMedia" disabled style="width: 200px; opacity: 0.6; margin-top: 10px;"/><br/>
      //             //
      //             //     <a href="#change-media" className="change-media" style="display: inline-block; margin-top: 10px;">Change media</a>
      //             //
      //             // }
      //             // else {
      //             //     <input type="hidden" id="EmbeddableMedia" placeholder="Embeddable Media" value="" disabled /><br/>
      //             //     <a href="#change-media" className="change-media" style="display: inline-block; margin-top: 10px;">Change media</a>
      //             //
      //             // }
      //
      //         </div>
      //
      //
      //     </div>
      //
      // <div className="contentInfo">
      //
      //     <div className="input-wrap">
      //         <input type="text" id="Title" className="title" placeholder="Title"/>
      //     </div>
      //
      //     // <div className="input-wrap select">
      //     //     <span className="select-area">
      //     //         <span className="left"></span>
      //     //         <span className="center">Client</span>
      //     //         <a className="select-opener"></a>
      //     //         <select name="Client" placeholder="Client" className="valid" id="Client"
      //     //                 title="" aria-invalid="false" data-field="ClientId">
      //     //         </select>
      //     //     </span>
      //     //     <div style={clear: 'both'}></div>
      //     // </div>
      //     //
      //     // <div className="input-wrap select">
      //     //     <span className="select-area">
      //     //         <span className="left"></span>
      //     //         <span className="center">Creative Type</span>
      //     //         <a className="select-opener"></a>
      //     //         <select name="CreativeType" placeholder="Creative Type" className="valid" id="CreativeType"
      //     //                 title="" aria-invalid="false" data-field="CreativeType">
      //     //         </select>
      //     //     </span>
      //     //     <div style={clear: 'both'}></div>
      //     // </div>
      //
      //     <div className="input-wrap">
      //         <input type="text" className="tagInput" placeholder="Tags" />
      //         <div className="tagHolder">
      //
      //         </div>
      //     </div>
      //
      //     <div className="input-wrap checkbox-inline">
      //         <input type="checkbox" id="IsPrivate" data-field="IsPrivate" />
      //         <label for="IsPrivate">Private Content (for Pile Consultants only)</label>
      //     </div>
      //
      // </div>
      //
      //     <div className="cornerButtons">
      //         <button type="submit" className="btn-default">Save</button>
      //         <a className="btn-default cancel">Cancel</a>
      //     </div>
      //
      //     <span className="contentDate"><%= PublishedDate %></span>
      //
      // </div>
      // </li>
    )
  }
}
