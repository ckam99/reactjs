import React from "react";
import ReactDom from "react-dom";

export const Head = ({ children }) => {
    return ReactDom.createPortal(
        <>{children}</>,
        document.querySelector("head")
    )
}

const Container = ({ children }) => {
    return <> { children}</>
}

const Layout = ({ children }) => {
    return <>{children}</>
}

Layout.Head = Head
Layout.Container = Container


export default Layout