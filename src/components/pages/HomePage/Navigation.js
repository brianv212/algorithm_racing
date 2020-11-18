import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <header className="H">
            <h3 className="header">MORE ABOUT: </h3>
            <h6>
                <ul className="links">
                    <Link className="linkstyle" to="BubbleSort">
                        <li>Bubble Sort</li>
                    </Link>
                    <Link className="linkstyle" to="InsertionSort">
                        <li>Insertion Sort</li>
                    </Link>
                    <Link className="linkstyle" to="MergeSort">
                        <li>Merge Sort</li>
                    </Link>
                    <Link className="linkstyle" to="RadixSort">
                        <li>Radix Sort</li>
                    </Link>
                    <Link className="linkstyle" to="HashMap_1">
                        <li>HashMap</li>
                    </Link>
                    <Link className="linkstyle" to="Stack">
                        <li>Stack/Queue</li>
                    </Link>
                </ul>
            </h6>
        </header>
    )
}

export default Navigation