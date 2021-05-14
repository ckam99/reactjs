import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return <div className="navbar">
        <ul>
            <li><NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" exact className="nav-link" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/users" className="nav-link" activeClassName="active">Users</NavLink></li>
        </ul>
    </div>
}

export default Navbar;