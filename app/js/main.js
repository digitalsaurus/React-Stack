import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, hashHistory, Router, Route, IndexRoute, Link } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AgencyDashboard from './components/AgencyDashboard/AgencyDashboard.jsx'
import Analytics from './components/AgencyDashboard/Analytics'
import Profile from './components/AgencyDashboard/Profile'
import Creative from './components/AgencyDashboard/Creative'
import CreativeList from './containers/AgencyDashboard/CreativeList.jsx'
import Cases from './components/AgencyDashboard/Cases'
import Clients from './components/AgencyDashboard/Clients'
import Account from './components/AgencyDashboard/Account'
import Inbox from './components/AgencyDashboard/Inbox'

import TodoApp from './components/Todo/App.jsx'
import appReducers from './reducers'

let store = createStore(appReducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AgencyDashboard}>
        <IndexRoute component={Analytics} />
        <Route path='todo' component={TodoApp} />
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
