import React, {useState} from 'react'
import '../BubbleSort/DVBubbleSort.css'
import '../buttons.css'
import './algorithms.css'

function Algorithms () {
    // Functions that stops the entire process for 10 milliseconds
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))
    const getList = list => {
        return sleep(10).then(0)
    }

    // Handles the three options to randomize arrays
    const setNewArr = (racer,array) => {
        const newArr = []
        for (let i = 0; i < array.length ; i++){
            newArr.push(array[i])
        }
        // When the user wants to randomize both arrays with the same data
        if (racer === -1){
            setArr1(newArr)
            setArr2(newArr.map(function(item){
                return item - 1;
            }))
        }
        //Randomize Array 1
        else if (racer === 1){
            setArr1(newArr)
        }
        //Randomize Array 2
        else if (racer === 2){
            setArr2(newArr)
        }
    }

    // Ensures that all 64 numbers are distinct
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

    // Used to identify which function will be ran
    const setRacer = (id, racer) => {
        if (id === 1){
            setRacer1(racer)
        }
        if (id === 2){
            setRacer2(racer)
        }
    }

    const [arr1, setArr1] = useState(resetArr)
    const [arr2, setArr2] = useState(resetArr)

    const [racer1, setRacer1] = useState(-1)
    const [racer2, setRacer2] = useState(-1)

    const [running,setRunning] = useState(false)

    const bubbleSort = async (racer,arr) => {
        let a = arr
        let len = a.length;
        let swapped;

        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                if (a[i] > a[i + 1]) {
                    let tmp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = tmp;
                    swapped = true;
                    await sleep(10)
                    setNewArr(racer,a)
                }
            }
        } while (swapped);
        setRunning(false)
    }

    const getNum = (num, index) => {
        const strNum = String(num);
        let end = strNum.length - 1;
        const foundNum = strNum[end - index];

        if (foundNum === undefined){
            return 0;
        }
        return foundNum;
    };

    const radixsort = async (racer,arr) => {
        let maxLength = 3;
        let copy = arr.slice()

        for (let i = 0; i < maxLength; i++) {
            let buckets = Array.from({ length: 10 }, () => []);
            for (let j = 0; j < arr.length; j++){
                let num = getNum(copy[0], i)
                buckets[num].push(copy[0])
                copy.shift()

                let copyArr = []
                copyArr.push.apply(copyArr, buckets.flat())
                copyArr.push.apply(copyArr, copy)
                setNewArr(racer,copyArr)
                await sleep(10)
            }
            copy = buckets.flat()
        }
        setRunning(false)
    }

    const insertionSort = async (racer,arr) => {
        let tempArr = arr
        for (let i = 1; i < tempArr.length; i++) {
            for (let comparisonIndex = i; comparisonIndex !== -1; comparisonIndex--) {
                if (comparisonIndex - 1 !== -1){
                    if (tempArr[comparisonIndex - 1] > tempArr[comparisonIndex]){
                        let temp = tempArr[comparisonIndex]
                        tempArr[comparisonIndex] = tempArr[comparisonIndex-1];
                        tempArr[comparisonIndex-1] = temp
                    }
                    else {
                        break
                    }
                }
                await sleep(10)
                setNewArr(racer,tempArr)
            }
        }
        setRunning(false)
    }

    const handleMerge = (finished,newlyAdded,l,li,r,ri,remaining,right,left,racer) => {
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
        setNewArr(racer,newArr)
    }

    const mergeSort = async (racer,arr) => {
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
                        resultArray.push(left[leftIndex]);
                        leftIndex++;
                    } 
                    else {
                        resultArray.push(right[rightIndex]);
                        rightIndex++;
                    }
                    await getList(resultArray)
                    handleMerge(copyleft,resultArray,left,leftIndex,right,rightIndex,leftArr,rightArr,true,racer)
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
                        resultArray.push(left[leftIndex]);
                        leftIndex++;
                    } 
                    else {
                        resultArray.push(right[rightIndex]);
                        rightIndex++;
                    }
                    await getList(resultArray)
                    handleMerge(copyright,resultArray,left,leftIndex,right,rightIndex,rightArr,true,copyleft,racer)
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
    }

    const startRace = async () => {
        if (racer1 > -1 && racer2 > -1){
            setRunning(true)
            all_algorithms[racer1](1,arr1)
            all_algorithms[racer2](2,arr2)
        }
        else{
            alert("Please choose two racers!")
        }
    }

    const all_algorithms = [bubbleSort, radixsort, insertionSort, mergeSort]
    const all_algorithms_string = ["Bubble Sort", "Radix Sort", "Insertion Sort", "Merge Sort"]



    return (
        <div>
            <div className="buttons">
                <button onClick={startRace}
                        className="b"
                        disabled={running}>Start Race</button>
                <button onClick={() => setNewArr(1,resetArr())}
                        className="b"
                        disabled={running}>Randomize Array 1</button>
                <button onClick={() => setNewArr(2,resetArr())}
                        className="b"
                        disabled={running}>Randomize Array 2</button>
                <button onClick={() => setNewArr(-1,resetArr())}
                        className="b"
                        disabled={running}>Set Same Array</button>                 
            </div>


            <div className="racer_selection">
                <div className="buttons_left">
                    <h5>Racer 1: {all_algorithms_string[racer1]}</h5>
                    <div className="racers">
                        <button onClick={() => setRacer(1,0)}
                                className="b"
                                disabled={racer1===0}>Bubble Sort</button>
                    </div>
                    <div className="racers">
                        <button onClick={() => setRacer(1,1)}
                                className="b"
                                disabled={racer1===1}>Radix Sort</button>
                    </div>
                    <div className="racers">
                        <button onClick={() => setRacer(1,2)}
                                className="b"
                                disabled={racer1===2}>Insertion Sort</button>
                    </div>
                    <div className="racers">
                        <button onClick={() => setRacer(1,3)}
                                className="b"
                                disabled={racer1===3}>Merge Sort</button>
                    </div>
                </div>


                <div className="buttons_left">
                    <h5>Racer 2: {all_algorithms_string[racer2]}</h5>
                    <div className="racers">
                        <button onClick={() => setRacer(2,0)}
                                className="b"
                                disabled={racer2===0}>Bubble Sort</button>
                    </div>
                    <div className="racers">
                        <button onClick={() => setRacer(2,1)}
                                className="b"
                                disabled={racer2===1}>Radix Sort</button>
                    </div>
                    <div className="racers">
                        <button onClick={() => setRacer(2,2)}
                                className="b"
                                disabled={racer2===2}>Insertion Sort</button>
                    </div>
                    <div className="racers">
                        <button onClick={() => setRacer(2,3)}
                                className="b"
                                disabled={racer2===3}>Merge Sort</button>
                    </div>
                </div>
            </div>

            <div className="array-container">
                {arr1.map((value,index) => (
                    <div
                        key={index}
                        className="array" 
                        style={{height: `${value}px`, backgroundColor: `rgb(${65 + Math.ceil(value/8.038)},0,${115 + Math.ceil(value/4.535)})`}}>
                    </div>
                ))}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {arr2.map((value,index) => (
                    <div
                        key={index}
                        className="array" 
                        style={{height: `${value}px`, backgroundColor: `rgb(${65 + Math.ceil(value/8.038)},0,${115 + Math.ceil(value/4.535)})`}}>
                    </div>
                ))}
            </div>
        </div>       
    )
}

export default Algorithms