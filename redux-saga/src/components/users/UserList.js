import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../../store/actions/users';


const UserList = () => {

    const { users, loading, error } = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return <>
        <h1>List users</h1>
        {loading && <p>loading...</p>}
        {users.length > 0 && users.map((user) => <li key={user.id}> {user.name} </li>)}
        {users.length === 0 && !loading && <p>No users available</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && <button onClick={() => dispatch(fetchUsers())}>Refresh</button>}
    </>
}

export default UserList