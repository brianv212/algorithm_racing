import React, {useState} from 'react'
import Back from "../goBack"
import {Link} from "react-router-dom"
import './InsertionSort.css'
import '../buttons.css'


function InsertionSort () {
    const checkIndex = (i) => {
        if (i <= iteration - 1) {
            return "green"
        }
        return "red"
    }

    const randomize = () => {
        let newArr = []
        for (let i = 0 ; i < 10 ; i++){
            let newNum = Math.floor(Math.random() * 999)
            newArr.push(newNum)
        }
        setArr([...newArr])
        setIteration(0)
    }

    const insertionSort = () => {
        let tempArr = arr
        let i = iteration

        if (i <= tempArr.length - 1){
            for (let comparisonIndex = i; comparisonIndex !== -1; comparisonIndex--) {
                if (comparisonIndex - 1 !== -1){
                    if (tempArr[comparisonIndex - 1] > tempArr[comparisonIndex]){
                        let temp = tempArr[comparisonIndex]
                        tempArr[comparisonIndex] = tempArr[comparisonIndex-1];
                        tempArr[comparisonIndex-1] = temp
                    }
                }    
            }
            setArr([...tempArr])
        }
        setIteration(iteration => iteration + 1)
    }

    const [arr,setArr] = useState([4,8,3,7,1,6,2,0,5,9])
    const [iteration,setIteration] = useState(0)

    return (
        <div>
            <div className="top-bar">
                <Back />
                <Link to="/algorithm_racing/DVInsertionSort" className="link">Visualize It!</Link>
            </div>
            <h1 style={{textAlign: "center"}}>INSERTION SORT</h1>
            <h5 style={{textAlign: "center"}}><b>WHAT IS IT?</b></h5>
            <div className="description">
                <ul>
                    <li>Sorts in O(n^2) time, which is on par with Bubble Sort.</li>
                    <li>Similar to Bubble Sort. Think of it as sorting starting from the left.</li>    
                    <li>Inserts from left to right by taking the left-most unsorted node and reinserting at the right spot.</li>
                </ul>
            </div>

            <div className="buttons">
                <button onClick={insertionSort} className="b" disabled={iteration === arr.length}>Press Me!</button>
                <button onClick={randomize}>Randomize!</button>
            </div>

            <div className="listRender">
                {arr.map((value, index) => (
                    <h1 className="InsertionNode">
                        <div className={`list${checkIndex(index)}`}>{value}</div>
                    </h1>
                ))}

            </div>
        </div>
    )
}


export default InsertionSort