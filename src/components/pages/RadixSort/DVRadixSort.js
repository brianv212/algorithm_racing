import React, {useState} from 'react'

function DVRadixSort() {
    const setNewArr = (array) => {
        const newArr = []
        for (let i = 0; i < array.length ; i++){
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

    const getNum = (num, index) => {
        const strNum = String(num);
        let end = strNum.length - 1;
        const foundNum = strNum[end - index];

        if (foundNum === undefined){
            return 0;
        }
        return foundNum;
    };

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))

    const radixsort = async () => {
        setRunning(true)
        let maxLength = 3;
        let copy = arr.slice()

        for (let i = 0; i < maxLength; i++) {
            let buckets = Array.from({ length: 10 }, () => []);
            for (let j = 0; j < arr.length; j++){
                let num = getNum(copy[0], i)
                buckets[num].push(copy[0])
                setRed(copy[0])
                copy.shift()

                let copyArr = []
                copyArr.push.apply(copyArr, buckets.flat())
                copyArr.push.apply(copyArr, copy)
                setNewArr(copyArr)
                await sleep(50)
            }
            copy = buckets.flat()
            // setArr([...copy]);
        }
        setRunning(false)
        setRed(0)
    }

    return (
        <div>
            <div className="buttons">
                <button onClick={radixsort}
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

export default DVRadixSort
