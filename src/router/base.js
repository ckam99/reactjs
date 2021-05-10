import React from "react";
import { Redirect } from "@reach/router";
import storage from '../store/local'
import { useLocation } from '@reach/router'

export const ProtectedRoute = ({ page: Component, ...rest }) => {
    const location = useLocation()
    const Route = (props) => {
        if (storage.guard)
            return <Component {...props} {...rest} />;
        const redirect = `/login?redirect=${location.pathname}`
        return <Redirect to={redirect} from={location.pathname} noThrow />;
    };
    return <Route />;
};

export const GuestRoute = ({ page: Component, ...rest }) => {
    const Route = (props) => {
        if (storage.guard)
            return <Redirect to="/" from={props.location} noThrow />;
        return <Component {...props} {...rest} />;
    };
    return <Route />;
};

export const Route = ({ page: Component, ...rest }) => {
    const BaseRoute = (props) => {
        return <Component {...props} {...rest} />;
    };
    return <BaseRoute />;
};

export const NestedRoute = (props) => {
    return <>{props.children}</>;
};
