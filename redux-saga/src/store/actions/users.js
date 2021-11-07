import * as types from '../types'


export function fetchUsers(users) {
    return {
        type: types.USERS_FETCH_REQUESTED,
        payload: users
    }
}