import { createSlice } from '@reduxjs/toolkit'
import counterActions from '../actions/counters'

const initisalState = {
    count: 0
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState: initisalState,
    reducers: counterActions
})

export const { increment, decrement, incrementStep } = counterSlice.actions

export default counterSlice.reducer