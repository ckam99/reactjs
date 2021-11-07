import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from '../types'


function fetchUsersApi() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .catch(err => { throw err })
}


function* fetchUsers(action) {
    try {
        const users = yield call(fetchUsersApi)
        yield put({ type: types.USERS_FETCH_SUCCEEDED, users: users })
    } catch (e) {
        yield put({ type: types.USERS_FETCH_FAILED, message: e.message })
    }
}

function* getUserService() {
    yield takeEvery(types.USERS_FETCH_REQUESTED, fetchUsers)
}

export default getUserService




