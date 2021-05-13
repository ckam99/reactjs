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
    nested?: Array<RouteProps>
}


export const Route: React.FC<RouteProps> = ({ component, path, exact, authRequired, guest }) => {
    const condition = useRecoilValue<boolean>(authState)

    if (authRequired && condition)
        return <Redirect to="/login" />

    return <BaseRoute path={path} exact={exact}  >
        {component}
    </BaseRoute>
}

export const RenderRoute: React.FC<RouteProps> = (route: RouteProps) => {
    if (route.nested && route.nested.length > 0) {
        console.log(route);

        return <Route  {...route} >
            <div>...oo</div>
            <Switch>
                {route.nested.map((r, i) => <RenderRoute
                    path={`${route.path}/${r.path}`}
                    {...r}
                    key={i}
                />)}
            </Switch>
        </Route>

    }
    return <Route  {...route} />
}

export default {
    Route,
    RenderRoute
}
