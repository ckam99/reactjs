import * as types from '../types'


export function Increment() {
    return {
        type: types.INCREMENT_COUNTER
    }
}

export function Decrement() {
    return {
        type: types.DECREMENT_COUNTER
    }
}

export function Reset() {
    return {
        type: types.RESET_COUNTER
    }
}