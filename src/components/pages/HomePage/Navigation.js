import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <header className="H">
            <h3 className="header">MORE ABOUT: </h3>
            <h6>
                <ul className="links">
                    <Link className="linkstyle" to="/algorithm_racing/BubbleSort">
                        <li>Bubble Sort</li>
                    </Link>
                    <Link className="linkstyle" to="/algorithm_racing/InsertionSort">
                        <li>Insertion Sort</li>
                    </Link>
                    <Link className="linkstyle" to="/algorithm_racing/MergeSort">
                        <li>Merge Sort</li>
                    </Link>
                    <Link className="linkstyle" to="/algorithm_racing/RadixSort">
                        <li>Radix Sort</li>
                    </Link>
                    <Link className="linkstyle" to="/algorithm_racing/HashMap_1">
                        <li>HashMap</li>
                    </Link>
                    <Link className="linkstyle" to="/algorithm_racing/Stack">
                        <li>Stack/Queue</li>
                    </Link>
                </ul>
            </h6>
        </header>
    )
}

export default Navigation