import React from 'react'
import Navbar from '../partials/Navbar'
import { Head, Container } from './Base'


const MainLayout: React.FC & {
    Head: typeof Head
    Container: typeof Container
} = ({ children }) => {
    return <div className="App">
        <div className="App-header">
            <Navbar />
            {children}
        </div>
    </div>
}

MainLayout.Head = Head
MainLayout.Container = Container

export default MainLayout