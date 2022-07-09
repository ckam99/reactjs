import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IPost } from '../../schemas/post'
import { IState } from '../../schemas/common'

interface PostState extends IState {
  posts: IPost[]
}

const initialState: PostState = {
  loading: false,
  error: '',
  posts: [],
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    onRequest(state) {
      state.error = ''
      state.loading = true
    },
    onFailure(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    onSuccess(state, action: PayloadAction<IPost[]>) {
      state.loading = false
      state.error = ''
      state.posts = action.payload
    },
  },
})

export default postSlice.reducer
