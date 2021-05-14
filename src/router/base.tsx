import React from 'react'
import { Route as BaseRoute, Redirect, Switch } from 'react-router-dom'
import { authState } from '../store/states'
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
    const authenticated = useRecoilValue<boolean>(authState)

    if (authRequired && !authenticated)
        return <Redirect to="/login" />
    else if (authenticated && path === "/login")
        return <Redirect to="/" />

    return <BaseRoute path={path} exact={exact} component={component} />
}

export const RenderRoute: React.FC<RouteProps> = (route: RouteProps) => {
    if (route.children && route.children.length > 0) {

        return <>

            <Switch>
                <Route  {...route} />
                {route.children.map((r, i) => {
                    return <RenderRoute
                        path={`${route.path}/${r.path}`}
                        {...r}
                        key={i}
                    />
                })}
            </Switch>
        </>
    }
    return <Route  {...route} />
}

export default {
    Route,
    RenderRoute
}
