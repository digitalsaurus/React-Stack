import { combineReducers } from 'redux'
import todos from './Todo/todos'
import visibilityFilter from './Todo/visibilityFilter'

import creative from './AgencyDashboard/creative'

const appReducers = combineReducers({
    todos,
    visibilityFilter,
    creative
})

export default appReducers
