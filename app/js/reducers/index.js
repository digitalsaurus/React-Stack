import { combineReducers } from 'redux'
import todos from './Todo/todos'
import visibilityFilter from './Todo/visibilityFilter'

import creatives from './AgencyDashboard/creatives'

const appReducers = combineReducers({
    todos,
    visibilityFilter,
    creatives
})

export default appReducers
