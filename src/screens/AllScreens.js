import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "./style.css"

const AllScreens = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="child">{children}</div>
            <Footer />
        </div>

    )
}

export default AllScreens