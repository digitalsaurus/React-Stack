import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div id="dash-header">

          <ul id="header-nav">
            <li id="analyticsLink"><a href="/#/analytics" className="nav-link">ANALYTICS</a></li>
            <li id="profileLink"><a href="/#/profile" className="nav-link">PROFILE</a></li>
            <li id="creativeLink"><a href="/#/creative" className="nav-link">CREATIVE</a></li>
            <li id="casesLink"><a href="/#/cases" className="nav-link">CASES</a></li>
            <li id="clientsLink"><a href="/#/clients" className="nav-link">CLIENTS</a></li>

              <li id="rightSection">
                  <div id="inboxLink" className="divider">
                      <a href="/#/inbox" className="nav-link upgrade fa fa-envelope-o">
                          INBOX
                          <span id="inboxUnreadCount" className="badge"></span>
                      </a>
                  </div>
                  <div id="accountLink" className="divider left">
                      <a href="/#/account" className="nav-link">ACCOUNT</a>
                  </div>

                  <div style={{clear: 'both'}}></div>
              </li>

          </ul>


          <div style={{clear: 'both'}}></div>
      </div>
    );
  }
}

export default Navigation;
