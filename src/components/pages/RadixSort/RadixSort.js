import React, {useState} from 'react'
import Back from '../goBack'
import {Link} from 'react-router-dom'

import './RadixSort.css'
import '../buttons.css'

function RadixSort () {
    const checkIndex = (index) => {
        if (index === iteration){
            return "red"
        }
        else if (index < iteration ){
            return "green"
        }
        return "black"
    }

    const randomize = () => {
        let newArr = []
        for (let i = 0 ; i < 8 ; i++){
            let newNum = Math.floor(Math.random() * 899) + 100
            newArr.push(newNum)
        }
        setArr([...newArr])
        setIteration(0)
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

    const RadixSort = () => {
        if (iteration <= 2){
            let copy = arr.slice()

            let buckets = Array.from({length: 10}, () => []);
            for (let j = 0; j < arr.length; j++){
                let num = getNum(copy[0], iteration)
                buckets[num].push(copy[0])
                copy.shift()
            }
            let copyArr = []
            copyArr.push.apply(copyArr, buckets.flat())
            copyArr.push.apply(copyArr, copy)
            setArr([...copyArr])

            setIteration(iteration => iteration + 1)
        }
        console.log(iteration)
        console.log(arr)
    }

    const [arr, setArr] = useState([132,412,543,865,525,967,153,648])
    const [iteration, setIteration] = useState(0)


    return(
        <div>
            <div className="top-bar">
                <Back />
                <Link to="DVRadixSort" className="link">Visualize it</Link>
            </div>
            <div className="heading">
                <h1>RADIX SORT</h1>
                <h5><b>WHAT IS IT?</b></h5>
            </div>
            <div className="details">
                <ul>
                    <li>Algorithm that sorts based on least significant to most significant digit.</li>
                    <li>Is a stable sort, meaning that elements in the array will appear in the order found.</li>
                    <li>Sorts in O(n) time. Pretty fast!</li>
                </ul>
            </div>
            <div className="buttons">
                <button onClick={RadixSort} disabled={iteration===3} className="b">PressMe!</button>
                <button onClick={randomize}>Randomize!</button>
            </div>
            <div className="list_render">
                {arr.map((value) => (
                    <h1 className="RadixNode">
                        <div className={`list${checkIndex(2)}`}>{getNum(value,2)}</div>
                        <div className={`list${checkIndex(1)}`}>{getNum(value,1)}</div>
                        <div className={`list${checkIndex(0)}`}>{getNum(value,0)}</div>
                    </h1>
                ))}
            </div>
        </div>
    )


}

export default RadixSort