import React from 'react'
import { Route as BaseRoute, Redirect } from 'react-router-dom'
import { isAuthState } from '../store/states'
import { useRecoilValue } from 'recoil'

export interface RouteProps {
    component: React.FC
    path?: string
    exact?: boolean
    authRequired?: boolean
    guest?: boolean,
    children?: Array<RouteProps>
}


export const Route: React.FC<RouteProps> = ({ component, path, exact, authRequired, guest }) => {
    const authenticated = useRecoilValue<boolean>(isAuthState)

    if (authRequired && !authenticated)
        return <Redirect to="/login" />
    else if (authenticated && path === "/login")
        return <Redirect to="/" />

    return <BaseRoute path={path} exact={exact} component={component} />
}
