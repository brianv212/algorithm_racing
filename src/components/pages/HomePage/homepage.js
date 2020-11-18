import React from 'react'
import Navigation from './Navigation'
import '../BubbleSort/DVBubbleSort.css'
import Algorithms from '../DVHelpers/algorithms'

function Homepage() {
    return (
        <div>
            <Navigation />
            <div>
                <Algorithms />
            </div>
        </div>
    )
}

export default Homepage