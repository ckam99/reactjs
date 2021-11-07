import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counters'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})