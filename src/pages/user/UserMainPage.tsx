import * as React from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/store'

import { fetchUsers } from '../../store/actions/userAction'

const UserMainPage = () => {
  const dispatch = useAppDispatch()
  const { users, loading, error } = useAppSelector((state) => state.user)

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <h1 className="text-red-600 font-bold">{error}</h1>}
      <h1>Users page</h1>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  )
}

export default UserMainPage
