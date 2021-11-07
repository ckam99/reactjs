import * as types from '../types'


const initialState = {
    count: 0
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT_COUNTER:
            return {
                count: state.count + 1
            }
        case types.DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return initialState
    }
}