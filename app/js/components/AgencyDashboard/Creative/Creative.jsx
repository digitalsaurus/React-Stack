import React, { Component } from 'react'

export default class Creative extends Component {
  render() {
    return (
      <div className="view-wrap">
        <div className="side-nav-wrapper">
            <div className="side-nav">

            </div>
        </div>

        <div className="view-content">
          <div className="view-header">
            <h2>All Creative</h2>
            {this.props.children}
          </div>
        </div>
      </div>

    )
  }
}
