import { all } from 'redux-saga/effects'
import getUserService from './users'


export default function* rootService() {
    yield all([
        getUserService()
    ])
}
