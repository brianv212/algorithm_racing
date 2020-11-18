import React from 'react'
import './BubbleNode.css'


// Function that makes each node in large font with a border around it
const BubbleNode = ({ value }) => {
    return (
        <div>
            <h1 className="BubbleNode"> {value} </h1>
        </div>
    )
}

export default BubbleNode 