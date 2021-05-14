import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authState } from '../../store/states'
import useAuthAction from '../../store/actions/auth'
import Icon from '../controls/Icon'
import Navbar from '../partials/Navbar'
import { Head, Container } from './Base'

type MainProps = {
    Head: typeof Head
    Container: typeof Container
}
const MainLayout: React.FC & MainProps = ({ children }) => {

    const { authenticated, guard } = useRecoilValue(authState)
    const { logout } = useAuthAction()
    const history = useHistory()

    const handleLogOut = () => {
        const success = logout()
        if (success)
            history.push('/login')
    }

    return <div className="App">
        <div className="topbar ">
            <div className="flex items-center">
                {authenticated && <><div className="flex items-center justify-center" style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    background: '#fff',
                    padding: '2px',
                    margin: '5px'
                }}><Icon name="user" /></div>
                    <span>{guard.name}</span></>}
            </div>
            <div className="flex items-center">
                <span></span>
                {authenticated ? <button className="nav-link" style={{ fontSize: '14px' }} onClick={handleLogOut}>Log out</button> :
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                }
            </div>
        </div>
        <div className="App-content">
            <Navbar />

            {children}
        </div>
    </div>
}

MainLayout.Head = Head
MainLayout.Container = Container

export default MainLayout