import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, hashHistory, Router, Route, IndexRoute, Link } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import TodoApp from './components/App.jsx'
import appReducers from './reducers'

let store = createStore(appReducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={TodoApp} />
    </Router>
  </Provider>,
  document.getElementById('app-root')
);
