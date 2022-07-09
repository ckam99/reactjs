import { AppDispatch } from '..'
import axios from '../../lib/axios'
import { postSlice } from '../slices/postSlice'

export const fetchAllPosts = (page: number = 0, limit: number = 20) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(postSlice.actions.onRequest())
      const response = await axios.get('posts', {
        params: {
          _page: page,
          _limit: limit,
        },
      })
      dispatch(postSlice.actions.onSuccess(response.data))
    } catch (e) {
      dispatch(postSlice.actions.onFailure(e as Error))
    }
  }
}
