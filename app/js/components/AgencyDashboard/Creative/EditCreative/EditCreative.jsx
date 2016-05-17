import React, { Component } from 'react'

export default class EditCreative extends Component {
  render() {
    const item = this.props.item
    return (
      <li>
        <div class="content-wrap">
          <div class="mediaWrap">
              <div class="input-wrap media">
                  <span class="cover-wrap">
                      <img src={item.coverImage != null || item.coverImage != '' ? item.coverImage : '/images/profilecreationwizard/image_large.png'} width="250" height="150" class="coverImage" />
                  </span>

                  if(EmbeddableMedia != '' && (typeof TempFile == 'undefined' || TempFile == null)) {

                      <input type="text" id="EmbeddableMedia" placeholder="Embeddable Media" data-field="EmbeddableMedia" disabled style="width: 200px; opacity: 0.6; margin-top: 10px;"/><br/>

                      <a href="#change-media" class="change-media" style="display: inline-block; margin-top: 10px;">Change media</a>

                  }
                  else {
                      <input type="hidden" id="EmbeddableMedia" placeholder="Embeddable Media" value="" disabled /><br/>
                      <a href="#change-media" class="change-media" style="display: inline-block; margin-top: 10px;">Change media</a>

                  }


                  <!--<a href="#choose-new-media" class="cancel-media">x</a>-->
              </div>


          </div>

          <div class="contentInfo">

              <div class="input-wrap">
                  <input type="text" id="Title" class="title" placeholder="Title" data-field="Title"/>
              </div>

              <div class="input-wrap">
                  <textarea name="ShortDescription"
                            id="ShortDescription" class="textarea-js" rows="5"
                            cols="30"
                            placeholder="Short description of creative piece. (500 characters max)"
                            data-val="true" data-val-required="Message is mandatory"
                            data-field="ShortDescription">
                  </textarea>
                  <div style="clear: both;"></div>
              </div>

              <div class="input-wrap select">
                  <span class="select-area"
                        style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); width: 100%;">
                      <span class="left"></span>
                      <span class="center">Client</span>
                      <a class="select-opener"></a>
                      <select name="Client" placeholder="Client" class="valid" id="Client"
                              style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); top: 0px; left: 0px; margin: 0px; padding: 0px; opacity: 0; border: none; position: absolute; width: 100%; height: 29px;"
                              title="" aria-invalid="false" data-field="ClientId">
                      </select>
                  </span>
                  <div style="clear: both;"></div>
              </div>

              <% if(typeof CreativeType != 'undefined' && CreativeType != null) { %>
              <div class="input-wrap select">
                  <span class="select-area"
                        style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); width: 100%;">
                      <span class="left"></span>
                      <span class="center">Creative Type</span>
                      <a class="select-opener"></a>
                      <select name="CreativeType" placeholder="Creative Type" class="valid" id="CreativeType"
                              style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); top: 0px; left: 0px; margin: 0px; padding: 0px; opacity: 0; border: none; position: absolute; width: 100%; height: 29px;"
                              title="" aria-invalid="false" data-field="CreativeType">
                      </select>
                  </span>
                  <div style="clear: both;"></div>
              </div>
              <% } %>

              <div class="input-wrap">
                  <input type="text" class="tagInput" placeholder="Tags" />
                  <div class="tagHolder">
                      <% for(var t in Tags) { %>
                          <span id="<%= t %>"><%= Tags[t].name %><a href="#delete">x</a></span>
                      <% } %>
                  </div>
              </div>

              <div class="input-wrap checkbox-inline">
                  <input type="checkbox" id="IsPrivate" data-field="IsPrivate">
                  <label for="IsPrivate">Private Content (for Pile Consultants only)</label>
              </div>

          </div>

          <div class="cornerButtons">
              <button type="submit" class="btn-default">Save</button>
              <a class="btn-default cancel">Cancel</a>
          </div>

          <span class="contentDate"><%= PublishedDate %></span>

      </div>
      </li>
    )
  }
}
