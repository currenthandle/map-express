import { combineReducers } from 'redux'

import signup from './signupReducer'
import user from './user'
import restaurant from './restaurant'

// not doing anything right now
export default combineReducers({
    restaurant,
    user,
    signup
})


