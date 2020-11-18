import React, {useState} from 'react'
import Back from '../goBack'
import StackNode from '../StackQueue/StackNode'
import {Link} from 'react-router-dom'
import './MergeSort.css'

function MergeSort() {
    const [mergeList, setMergeList] = useState([[4],[3],[2],[1],[8],[7],[6],[5]])
    const [split1, setSplit1] = useState([])
    const [split2, setSplit2] = useState([])
    const [split3, setSplit3] = useState([])
    const [split4, setSplit4] = useState([])
    const [split5, setSplit5] = useState([])
    const [split6, setSplit6] = useState([])
    const [splitFinal, setFinalSplit] = useState([])

    const listRender = mergeList.map((node) => <StackNode value={node}/>)
    const listRender1 = split1.map((node) => <StackNode value={node}/>)
    const listRender2 = split2.map((node) => <StackNode value={node}/>)
    const listRender3 = split3.map((node) => <StackNode value={node}/>)
    const listRender4 = split4.map((node) => <StackNode value={node}/>)
    const listRender5 = split5.map((node) => <StackNode value={node}/>)
    const listRender6 = split6.map((node) => <StackNode value={node}/>)
    const listFinalRender = splitFinal.map((node) => <StackNode value={node}/>)

    const [status, setStatus] = useState(0)
    const [disabled, setDisabled] = useState(false)

    // Handles the merge between two lists, making sure that the data is organized in the process
    const handleMerge = (list1,list2) => {
        let resultArray = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // While one of the arrays haven't been fully traversed through...
        while (leftIndex < list1.length && rightIndex < list2.length) {
            if (list1[leftIndex] <= list2[rightIndex]) {
                resultArray.push(list1[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(list2[rightIndex]);
                rightIndex++;
            }
        }

        // Retrieve the 'leftovers', the data that weren't collected in the while loop
        if (leftIndex < list1.length){
            for (var x = leftIndex; x < list1.length; x++){
                resultArray.push(list1[x])
            }
        }
        else if (rightIndex < list2.length){
            for (var y = rightIndex; y < list2.length; y++){
                resultArray.push(list2[y])
            }      
        }
        return(resultArray)
    }

    // Handles Merge Sort in steps
    const handleSplit = (e) => {
        // When the arrays are of size 1
        if (status === 0){
            setSplit1(handleMerge(mergeList[0], mergeList[1]))
            setSplit2(handleMerge(mergeList[2], mergeList[3]))
            setSplit3(handleMerge(mergeList[4], mergeList[5]))
            setSplit4(handleMerge(mergeList[6], mergeList[7]))

            setStatus(1)
        }
        else if(status === 1){
            setSplit5(handleMerge(split1,split2))
            setSplit6(handleMerge(split3,split4))
            setStatus(2)
        }

        else if(status === 2){
            setFinalSplit(handleMerge(split5,split6))
            setStatus(3)
            setDisabled(true)
        }
    }

    // Resets the whole demonstration with new numbers
    const handleRandom = (e) => {
        e.preventDefault()
        setMergeList([[Math.floor(Math.random() * 100)],[Math.floor(Math.random() * 100)],
                      [Math.floor(Math.random() * 100)],[Math.floor(Math.random() * 100)],
                      [Math.floor(Math.random() * 100)],[Math.floor(Math.random() * 100)],
                      [Math.floor(Math.random() * 100)],[Math.floor(Math.random() * 100)]])
        setSplit1([])
        setSplit2([])
        setSplit3([])
        setSplit4([])
        setSplit5([])
        setSplit6([])
        setFinalSplit([])
        setStatus(0)
        setDisabled(false)
    }

    return (
        <div>
            <div className="top-bar">
                <Back />
                <Link to="/algorithm_racing/DVMergeSort" className="link">Visualize it</Link>
            </div>
            <h1 className="merge_title">MERGE SORT</h1>
            <h5 className="descriptionTitle"><b>WHAT IS IT?</b></h5>
            <div className="description">
                <ul className="d">
                    <li>Divide and conquer algorithm that recusively sorts sublists of the whole list.</li>
                    <li>Sorts in O(n log(n) time, which is more favorable than other algorithms.</li>
                    <li>Like the example below, when all sublists are of size one is when we start the sort.</li>
                </ul>
            </div>
            <h2 className="buttons">
                <button onClick={handleSplit} disabled={disabled} className="bt"><b>Press Me!</b></button>
                <button onClick={handleRandom} className="bt">Randomize!</button>          
            </h2>
            <h2 className="step-1">{listRender}</h2>

            <h2 className="step-2">
                <p className="together">{listRender1}</p>
                <p className="together">{listRender2}</p>
                <p className="together">{listRender3}</p>
                <p className="together">{listRender4}</p>
            </h2>

            <h2 className="step-3">
                <p className="together">{listRender5}</p>
                <p className="together">{listRender6}</p>      
            </h2>

            <h2 className="results">
                <p className="together">{listFinalRender}</p>
            </h2>
        </div>
    )
}

export default MergeSort 