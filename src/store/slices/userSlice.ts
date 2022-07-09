import { createSlice } from '@reduxjs/toolkit'

import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction'

import { IState } from './../../schemas/common'
import { IUser } from './../../schemas/user'

interface UserState extends IState {
  users: IUser[]
}

const initialState: UserState = {
  loading: false,
  error: '',
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onRequest(state) {
      state.loading = true
    },
    onFailure(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    onSuccess(state, action: PayloadAction<IUser[]>) {
      state.loading = false
      state.error = ''
      state.users = action.payload
    },
  },
})

export default userSlice.reducer
