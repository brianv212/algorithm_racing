import React from 'react'
import './StackNode.css'

const StackNode = ({ value }) => {
    return (
        <div>
            <h1 className="StackNode"> {value} </h1>
        </div>
    )
}

export default StackNode