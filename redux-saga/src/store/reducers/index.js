
import { combineReducers } from 'redux'
import users from './users'
import counter from './counter'

export const reducers = combineReducers({
    users,
    counter
})