import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from './base'
import About from '../views/About'
import NotFound from '../views/errors/404'
import Home from '../views/Home'
import Login from '../views/Login'
import UserDetail from '../views/users/UserDetail'
import UserList from '../views/users/UserList'


const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={UserList} authRequired />
            <Route path="/users/:id" exact component={UserDetail} authRequired />
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
}


export default Router