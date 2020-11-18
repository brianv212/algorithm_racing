import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1><Link style={linkStyle} to="/">Algorithm Racing!</Link></h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1px'
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
}
export default Header