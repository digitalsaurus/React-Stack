import React, { Component } from 'react'

export default class Analytics extends Component {
  render() {
      console.log(this);
    return (
      <div>
        <div id="line_div" className="module"></div>

        <h2 id="heatMap">Heat Map</h2>

        <div id="interactiveMap" className="module">
            <div id="map_div"></div>
            <button data="world" className="regionBack" style={{display: 'none'}}>Zoom Out</button>
        </div>
        <div id="regions_div2" style={{width: '50%'}}></div>

        <h2 id="pageViews" style={{marginBottom: '5px'}}>Popular Pages</h2>

        <div id="table-wrap" className="module">
            <div id="table"></div>
            <span className="expand">+</span>
        </div>
      </div>
    )
  }
}
