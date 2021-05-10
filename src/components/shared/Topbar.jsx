import React from 'react'
import Logo from '../../assets/logo.svg';
import NavItem from '../shared/NavItem'
import { useRecoilValue } from "recoil";
import { isAuthState } from "../../store/states/base";


const Topbar = () => {

    const isAuth = useRecoilValue(isAuthState);

    return (
        <nav className="topbar  bg-dark">
            <div className="container-fluid" >
                <div className="navbar-brand">

                    <a href="/">
                        <img src={Logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        <span>ReactJS</span>
                    </a>
                </div>
                <ul >
                    <NavItem to="/" exact className="nav-link">
                        Home
                    </NavItem>
                    <NavItem to="/about" className="nav-link">
                        About US
                    </NavItem>
                    {isAuth && <NavItem to="/posts" className="nav-link">
                        Posts
                    </NavItem>}
                    <NavItem to="/login" className="nav-link">
                        Login
                    </NavItem>
                </ul>
            </div>
        </nav>
    )

}

export default Topbar