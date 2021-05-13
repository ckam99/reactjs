import React from 'react'
import ReactDom from 'react-dom'


export const Head: React.FC = ({ children }) => {
    return ReactDom.createPortal(
        <>{children}</>,
        document.querySelector('head') as HTMLElement
    )
}

export const Container: React.FC = ({ children }) => {
    return <>{children}</>
}

const Layout: React.FC & {
    Head: typeof Head
    Container: typeof Container
} = ({ children }) => {
    return <>{children}</>
}

Layout.Head = Head
Layout.Container = Container


export default Layout