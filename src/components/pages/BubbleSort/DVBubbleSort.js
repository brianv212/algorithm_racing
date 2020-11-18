import React, {useState} from 'react'
import './DVBubbleSort.css'

function DVBubbleSort () {
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

    const setNewArr = (array) => {
        const newArr = []
        for (let i = 0; i < 50 ; i++){
            newArr.push(array[i])
        }
        setArr(newArr)
    }
    
    const [arr,setArr] = useState(resetArr())
    const [running,setRunning] = useState(false)

    // Below handles whether the node of interest should be red or not
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

    // When sleep is called, nothing will happen for n milliseconds. This gives time to actually
    // show the changes happening
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))

    // Handles all the logic behind bubble sorting
    const bubbleSort = async (e) => {
        e.preventDefault()
        setRunning(true)
        let a = arr
        let len = a.length;
        let swapped;

        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                let original = a[i]
                if (a[i] > a[i + 1]) {
                    let tmp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = tmp;
                    setRed(tmp)
                    swapped = true;
                    await sleep(30)
                    setNewArr(a)
                }
                setRed(original)
                setNewArr(a)
            }
        } while (swapped);

        setRed(0)
        setNewArr(a)
        setRunning(false)
    }

    return (
        <div>
            <div className="buttons">
                <button onClick={bubbleSort}
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

export default DVBubbleSort