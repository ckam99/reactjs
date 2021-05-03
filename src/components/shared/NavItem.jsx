import React from 'react'
import { Link, Match } from "@reach/router";

export const NavLink = ({ to, exact, ...rest }) => (
    <Match path={`${to}/*`}>
        {({ location }) => {
            const isActive = exact
                ? location.pathname === to
                : location.pathname.includes(to);
            return <Link to={to} className={isActive ? "active" : ""} {...rest} />;
        }}
    </Match>
);

export const BaseLink = ({
    to,
    className,
    activeClass,
    inactiveClass,
    exact,
    ...rest
}) => (
    <Match path={`${to}/*`}>
        {({ location }) => {
            const isActive = exact
                ? location.pathname === to
                : location.pathname.includes(to);
            const allClass =
                className + (isActive ? ` ${activeClass}` : ` ${inactiveClass}`);
            return <Link to={to} className={allClass} {...rest} />;
        }}
    </Match>
);


const NavItem = ({ children, to, exact, className }) => {
    return (
        <li className="nav-item">
            <BaseLink
                to={to}
                activeClass="active"
                exact={exact}
                className={className}
            >
                {children}
            </BaseLink>
        </li>
    )

}

export default NavItem
