import * as types from '../types'


const initialState = {
    users: [],
    loading: false,
    error: null
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case types.USERS_FETCH_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case types.USERS_FETCH_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.users
            }
        case types.USERS_FETCH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state
    }
}