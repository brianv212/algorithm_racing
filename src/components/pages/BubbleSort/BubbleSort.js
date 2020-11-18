import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Back from '../goBack'
import BubbleNode from './BubbleNode'
import './BubbleSort.css'
import '../buttons.css'


function BubbleSort() {

    // sortList is the initial state of the list, changes frequently
    const [sortList, setSortList] = useState([6,9,3,7,2,1,3,7,0])
    const [remaining, setRemaining] = useState(sortList)
    const [final, setFinal] = useState([])

    // Left and Right Render done purely for visuals. The finished part of the list (right)
    // Will be colored green while the unfinished (left) part will be seen in red
    const listRender = sortList.map((node) => <BubbleNode value={node} />)
    const leftRender = remaining.map((node) => <BubbleNode value={node}/>)
    const rightRender = final.map((node) => <BubbleNode value={node}/>)

    const [disabled, setDisabled] = useState(false)
    const [iteration, setIteration] = useState(0)

    // Basically restarts the demonstration with new data.
    const setRandom = (e) => {
        e.preventDefault()
        let replacement = []
        for (let i = 0; i < 10; i++){
            replacement.push(Math.floor(Math.random() * 100))
        }
        setSortList(replacement)

        setRemaining(replacement)
        setFinal([])

        setDisabled(false)
        setIteration(0)
    }


    const handleSort = (e) => {
        e.preventDefault()
        const clone = sortList
        let len = listRender.length;


        // While we still haven't reached O(n^2), continue the sorting algorithm.
        if (iteration < len){
            let switchCount = 0
            for (var j = 0; j < len; j++){
                if (clone[j] > clone[j+1]){
                    let tmp = clone[j];
                    clone[j] = clone[j + 1];
                    clone[j + 1] = tmp;
                    switchCount = switchCount + 1
                }
            }
            // Sets the original to the clone for future iterations
            // Sets the iteration count up by 1 each time
            setIteration(iteration + 1)
            setSortList(clone)

            if (switchCount === 0){
                setDisabled(true)
                setRemaining([])
                setFinal(clone)
            }
            else{
                let first = clone.slice(0,len-(iteration+1))
                setRemaining(first)

                let last = clone.slice(len-(iteration+1), len)
                setFinal(last)          
            }
        }
        // Else if the whole list has been sorted, it's done running. Set disabled and
        // Prevent the user from pressing the button.
        else{
            setDisabled(true)
        }
    } 

    return(
        <div>
            <div className="top-bar">
                <Back />
                <Link to="DVBubbleSort" className="link">Visualize it</Link>
            </div>
            <h1 className="bubble_sort">BUBBLE SORT</h1>
            <h5 className="descriptionTitle"><b>WHAT IS IT?</b></h5>

            <div className="description">
                <ul className="d">
                    <li>Probably the least favorable sorting algorithm to use in practice.</li>
                    <li>Sorts in O(n^2) time. But still can be used for smaller data sets.</li>
                    <li>Can sort as fast as O(n) time, but very rarely unless the data is already mostly sorted.</li>
                </ul>
            </div>
            <div className="bubbleList">
                <h2 className="left">{leftRender}</h2>
                <h2 className="right">{rightRender}</h2>
            </div>
            <div className="center">
                <button onClick={handleSort} disabled={disabled} className="b"><b>Press Me!</b></button>
                <button onClick={setRandom} className="b">Randomize!</button>
            </div>
        </div>
    )
}


export default BubbleSort