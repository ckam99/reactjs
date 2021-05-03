import React from "react";
import { Redirect } from "@reach/router";
import { useRecoilValue } from 'recoil'
import { IsAuthState } from '../store/states/base'

export const ProtectedRoute = ({ page: Component, ...rest }) => {
    const isAuthenticated = useRecoilValue(IsAuthState)
    const Route = (props) => {
        if (isAuthenticated) {
            return <Component {...props} {...rest} />;
        } else {
            return <Redirect to="/login" from={props.location} noThrow />;
        }
    };
    return <Route />;
};

export const GuestRoute = ({ page: Component, ...rest }) => {
    const isAuthenticated = useRecoilValue(IsAuthState)
    const Route = (props) => {
        if (isAuthenticated) {
            return <Redirect to="/" from={props.location} noThrow />;
        } else {
            return <Component {...props} {...rest} />;
        }
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
