import { userSlice } from './../slices/userSlice'
import axios from '../../lib/axios'
// import { IUser } from './../../schemas/user'
// import { ServerCollectionResponse } from './../../schemas/common'
import { AppDispatch } from './../index'

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.onRequest())
      // const res = await axios.get<ServerCollectionResponse<IUser>>('users')
      // dispatch(userSlice.actions.fetchSuccess(res.data.result))
      const res = await axios.get('users')
      dispatch(userSlice.actions.onSuccess(res.data))
      console.log('res', res.data)
    } catch (e) {
      dispatch(userSlice.actions.onFailure(e as Error))
    }
  }
}
