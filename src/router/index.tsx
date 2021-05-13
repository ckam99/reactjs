import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Users from '../views/users/Users'
import UserDetail from '../views/users/UserDetail'
import { RenderRoute, Route, RouteProps } from './base'
import NotFound from '../views/errors/404'

const routes: Array<RouteProps> = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/users',
        component: Users,
        exact: true,
        authRequired: false,
        children: [
            {
                path: ':id',
                component: UserDetail,
                exact: true
            }
        ]
    },
    {
        component: NotFound,
        exact: true,
    },
]

const Router = () => {
    return <BrowserRouter>
        <Switch>
            {routes.map((route, i) => {
                return <RenderRoute key={i} {...route} />
            })}
        </Switch>
    </BrowserRouter>
}


export default Router