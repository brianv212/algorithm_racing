import React, {useState} from 'react'
import '../InsertionSort/DVInsertionSort.css'
import '../buttons.css'


function DVInsertionSort () {
    const setNewArr = (array) => {
        const newArr = []
        for (let i = 0; i < 50 ; i++){
            newArr.push(array[i])
        }
        setArr(newArr)
    }

    const resetArr = () => {
        const newArr = []
        for (let i = 0 ; i < 50 ; i++){
            let newNum = Math.floor(Math.random() * 615) + 20
            while (newArr.includes(newNum)){
                newNum = Math.floor(Math.random() * 615) + 20
            }
            newArr.push(newNum)
        }
        return newArr
    }

    const [arr, setArr] = useState(resetArr)
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

    const insertionSort = async () => {
        setRunning(true)

        let tempArr = arr
        for (let i = 1; i < tempArr.length; i++) {
            setRed(tempArr[i])
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
                await sleep(50)
                setNewArr(tempArr)
            }
        }
        setRed(0)
        setRunning(false)
    }

    return (
        <div>
            <div className="buttons">
                <button onClick={insertionSort}
                        className="b"
                        disabled={running}>Click Me!</button>
                <button onClick={() => setNewArr(resetArr())}
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

export default DVInsertionSort