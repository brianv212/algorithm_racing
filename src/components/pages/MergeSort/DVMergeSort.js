import React, {useState} from 'react';
import '../BubbleSort/DVBubbleSort.css';

function DVMergeSort () {
    const resetArr = () => {
        const newArr = []
        for (let i = 0 ; i < 64 ; i++){
            let newNum = Math.floor(Math.random() * 615) + 20
            while (newArr.includes(newNum)){
                newNum = Math.floor(Math.random() * 615) + 20
            }
            newArr.push(newNum)
        }
        return newArr
    }

    const setNewArr = () => {
        let newArr = []
        for (let i = 0 ; i < 64 ; i++){
            newArr.push(Math.floor(Math.random() * 615) + 20)
        }
        setArr(newArr)
    }
    const [arr,setArr] = useState(resetArr())

    const [running, setRunning] = useState(false)

    const [red, setRed] = useState(0)
    const checkRed = (val) => {
        if (val === red){
            return 250
        }
        return 65 + Math.ceil(val/8.038)
    }
    const checkBlue = (val) => {
        if (val === red){
            return 0
        }
        return 115 + Math.ceil(val/4.535) 
    }


    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))
    const getList = list => {
        return sleep(75).then(0)
    }

    const handleMerge = (finished,newlyAdded,l,li,r,ri,remaining,right,left) => {
        let newArr = []
        if (left !== true){
            for (let i = 0; i < left.length; i++){
                newArr.push.apply(newArr,left[i])
            }
        }

        for (let i = 0; i < finished.length; i++ ){
            newArr.push.apply(newArr,finished[i])
        }

        newArr.push.apply(newArr, newlyAdded)
        newArr.push.apply(newArr, l.slice(li))
        newArr.push.apply(newArr, r.slice(ri))

        for (let i = 0; i < remaining.length; i++){
            newArr.push.apply(newArr,remaining[i])
        }

        if (right !== true){
            for (let i = 0; i < right.length; i++){
                newArr.push.apply(newArr,right[i])
            }
        }
        setArr([...newArr])
    }

    const mergeSort = async () => {
        setRunning(true)
        const middle = Math.floor(arr.length / 2);

        let leftArr = []
        for (let i = 0; i < middle; i ++){
            leftArr.push([arr[i]])
        }
        let rightArr = []
        for (let i = middle; i < arr.length; i++){
            rightArr.push([arr[i]])
        }

        let running = true
        while (running === true){

            let copyleft = []
            while (leftArr.length !== 0){
                let left = leftArr[0]
                let right = leftArr[1]
                leftArr.shift()
                leftArr.shift()
                let resultArray = []
                let leftIndex = 0
                let rightIndex = 0

                while (leftIndex < left.length && rightIndex < right.length) {
                    if (left[leftIndex] < right[rightIndex]) {
                        setRed(left[leftIndex])
                        resultArray.push(left[leftIndex]);
                        leftIndex++;
                    } 
                    else {
                        setRed(right[rightIndex])
                        resultArray.push(right[rightIndex]);
                        rightIndex++;
                    }
                    await getList(resultArray)
                    handleMerge(copyleft,resultArray,left,leftIndex,right,rightIndex,leftArr,rightArr,true)
                }
                resultArray = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
                copyleft.push(resultArray)             
            }

            let copyright = []
            while (rightArr.length !== 0){
                let left = rightArr[0]
                let right = rightArr[1]
                rightArr.shift()
                rightArr.shift()
                let resultArray = []
                let leftIndex = 0
                let rightIndex = 0

                while (leftIndex < left.length && rightIndex < right.length) {
                    if (left[leftIndex] < right[rightIndex]) {
                        setRed(left[leftIndex])
                        resultArray.push(left[leftIndex]);
                        leftIndex++;
                    } 
                    else {
                        setRed(right[rightIndex])
                        resultArray.push(right[rightIndex]);
                        rightIndex++;
                    }
                    await getList(resultArray)
                    handleMerge(copyright,resultArray,left,leftIndex,right,rightIndex,rightArr,true,copyleft)
                }
                resultArray = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
                copyright.push(resultArray)
            }

            leftArr = copyleft
            rightArr = copyright

            // Assumes rightArr.length === 1 as well
            if (leftArr.length === 1){
                if (rightArr.length === 0){
                    running = false
                }
                else {
                    leftArr.push(rightArr[0])
                    rightArr = []
                }
                
            }
        }
        setRunning(false)
        setRed(0)
    }

    return (
        <div>
            <div className="buttons">
                <button onClick={mergeSort}
                        className="b"
                        disabled={running}>Click Me!</button>
                <button onClick={() => setNewArr()}
                        className="b"
                        disabled={running}>Randomize</button>
            </div>
            <div className="array-container">
                {arr.map((value,index) => (
                    <div
                        key={index}
                        className="array" 
                        style={{height: `${value}px`, backgroundColor: `rgb(${checkRed(value)},0,${checkBlue(value)})`}}>
                    </div>
                ))}
            </div>
        </div>
    )

}


export default DVMergeSort