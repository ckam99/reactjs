import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from '../../router/base'
import UserDetail from './UserDetail'
import UserList from './UserList'



const Users = () => {
    return <Switch>
        <Route path="/" component={UserList} />
        <Route path="users/:id" component={UserDetail} exact />
    </Switch>
}

export default Users