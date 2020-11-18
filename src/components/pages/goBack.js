import React from 'react'
import { Link } from 'react-router-dom'
import './goBack.css'

function Back() {
    return (
        <div className='container-fluid'>
            <nav>
                <Link className='navStyle' to="/">
                    <p className="text">Back to Home</p>
                </Link>
            </nav>
        </div>
    )
}

export default Back 