import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, hashHistory, Router, Route, IndexRoute, Link } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

import AgencyDashboard from './components/AgencyDashboard/AgencyDashboard.jsx'
import Analytics from './components/AgencyDashboard/Analytics'
import Profile from './components/AgencyDashboard/Profile'
import Creative from './components/AgencyDashboard/Creative'
import Cases from './components/AgencyDashboard/Cases'
import Clients from './components/AgencyDashboard/Clients'
import Account from './components/AgencyDashboard/Account'
import Inbox from './components/AgencyDashboard/Inbox'

// ReactDOM.render(
//   <AgencyDashboard>
//     <Creative name="test">
//
//     </Creative>
//   </AgencyDashboard>,
//     document.getElementById('app-root')
// );
//
ReactDOM.render(
        <Router history={hashHistory}>
          <Route path='/' component={AgencyDashboard}>
            <IndexRoute component={Analytics} />
            <Route path='analytics' component={Analytics} />
            <Route path='profile' component={Profile} />
            <Route path='creative' component={Creative} name="test" />
            <Route path='cases' component={Cases} />
            <Route path='clients' component={Clients} />
            <Route path='account' component={Account} />
            <Route path='inbox' component={Inbox} />
          </Route>
        </Router>,
    document.getElementById('app-root')
);
