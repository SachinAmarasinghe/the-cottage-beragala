import React from 'react'
import Footer from './footer'
import Navigation from './navigation'

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <>{children}</>
            <Footer />
        </>
    )
}

export default Layout