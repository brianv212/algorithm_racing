import React, { useState } from 'react'
import StackNode from './StackNode'
import './Stack.css'
import '../buttons.css'
import Back from '../goBack'

const Stack = () => {
    const [StackList, setStackList] = useState([])
    const [mode, setMode] = useState("Stack")
    const stackRender = StackList.map((node) => <StackNode value={node} />)

    const handlePush = (e) => {
        e.preventDefault()
        if (e.target[0].value === "")
        {
            alert("Please enter a value first!")
        }
        else if (StackList.length === 10)
        {
            alert("Max 10 items only. Pop some!")
        }
        else{
            console.log(e.target[0])
            setStackList([e.target[0].value, ...StackList])
            e.target[0].value = ''
        }
    }

    const handlePop = (e) => {
        e.preventDefault()
        const clone = StackList.slice()
        if (mode === "Stack"){
            clone.shift()
        }
        else {
            clone.pop()
        }
        console.log(clone)
        setStackList(clone)
    }

    const handleMode = (e) => {
        e.preventDefault()
        if (mode === "Stack"){
            setMode("Queue")
        }
        else {
            setMode("Stack")
        }
    }

    return (
        <div>
            <div>
                <Back />
                <h1 className="sq_title">STACK / QUEUE</h1>
            </div>
            <h5 className="descriptionTitle"><b>WHAT IS IT?</b></h5>
            <div className="description">
                <ul>
                    <li>Data structures which ensures the processing of data elements in some order.</li>
                    <li>Stacks follow the LIFO Principle while Queues follow the FIFO Principle.</li>
                    <li>Which one to use depends solely on what logically works best.</li>
                </ul>
            </div>

            <div className="Stack">
                <div className="push_pop">
                    <form onSubmit={handlePush}>
                        <input
                            name="nodeValue"
                            type="number"
                            max={99999}
                            placeholder="Add a value!"
                        />
                        <button className="b">PUSH</button>
                    </form>
                    <button className="b" onClick={handlePop}><b>POP!</b></button>
                </div>

                <div className="change_mode">
                    <h1>Current Mode: {mode}</h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="b" onClick={handleMode}>CHANGE MODE</button>
                </div>

            </div>
            <div className="stackList">{stackRender}</div>
        </div>
    )
}

export default Stack