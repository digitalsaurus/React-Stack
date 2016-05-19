import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, hashHistory, Router, Route, IndexRoute, Link } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AgencyDashboard from './components/AgencyDashboard.jsx'
import Analytics from './components/Analytics'
import Profile from './components/Profile'
import Creative from './components/Creative'
import Cases from './components/Cases'
import Clients from './components/Clients'
import Account from './components/Account'
import Inbox from './components/Inbox'

import appReducers from './reducers'

let store = createStore(appReducers)

ReactDOM.render(
  <Provider store={store}>
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
    </Router>
  </Provider>,
  document.getElementById('app-root')
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app-root')
// )
