import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import postReducer from './slices/postSlice'

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
