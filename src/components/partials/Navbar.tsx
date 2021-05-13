import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return <div className="navbar">
        <ul>
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
        </ul>
    </div>
}

export default Navbar;