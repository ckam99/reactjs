import React from 'react'
import Navbar from '../partials/Navbar'
import { Head, Container } from './Base'


const BlankLayout: React.FC & {
    Head: typeof Head
    Container: typeof Container
} = ({ children }) => {
    return <div className="App">
        <div className="App-header">
            {children}
        </div>
    </div>
}

BlankLayout.Head = Head
BlankLayout.Container = Container

export default BlankLayout