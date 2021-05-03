import React from 'react'
import '../../assets/main.css'
import Topbar from '../shared/Topbar'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-row w-screen h-screen overflow-hidden">
            <div className="flex flex-col flex-auto overflow-hidden">
                <Topbar />

                <div className="flex flex-col overflow-x-hidden overflow-y-auto h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout