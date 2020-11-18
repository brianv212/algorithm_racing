import React, { useState } from 'react'
import Bucket from '../Bucket'
import './HashMapDemo2.css'

const HashMapDemo2 = () => {
    const [buckets, setBuckets] = useState([
        { id: 0, data: [] },
        { id: 1, data: [] },
        { id: 2, data: [] },
        { id: 3, data: [] },
        { id: 4, data: [] },
        { id: 5, data: [] },
        { id: 6, data: [] },
        { id: 7, data: [] },
        { id: 8, data: [] },
        { id: 9, data: [] },
    ])

    const [hash, setHash] = useState(42443)

    const handleHash = (e) => {
        e.preventDefault()
        const newHash = e.target[0].value
        console.log(newHash)
        if (newHash === ""){
            console.log("lol")
            setHash(hash)
        }
        else {
            setHash(newHash)
        }

        let newBuckets = [...buckets]
        for (let i = 0 ; i < buckets.length ; i++ ){
            let newBucket = { ...buckets[i] }
            newBucket.data = []
            newBuckets[i] = newBucket
        }
        setBuckets(newBuckets)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const word = e.target[0].value
        let newBuckets = [...buckets]
        let index = hashWord(word)
        let newBucket = { ...buckets[index] }
        newBucket.data.push(word)
        newBuckets[index] = newBucket
        setBuckets(newBuckets)
    }
    
    const hashWord = (word) => {
        let hval = 0
        for (let i = 0; i < word.length; i++) {
            hval += hash * word.charCodeAt(i)
        }
        return hval % 10
    }

    const bucketsRender = buckets.map((bucket) => (
        <Bucket id={bucket.id} data={bucket.data} />
    ))

    return (
        <div className="HashMapDemo">
            <h1 className="title"> HASH MAP DEMO </h1>
            <h3 className="title">Current Hash: {hash}</h3>
            <div className="forms">
                <form onSubmit={handleSubmit}>
                    <input name="word" type="text" placeholder="Text" />
                    <button>Submit</button>
                </form>
                <form onSubmit={handleHash}>
                    <input
                        type="number"
                        placeholder={hash}
                        max={999999}
                        min={1}
                        name="hashValue"
                    />
                    <button>Change Hash!</button>
                </form>
            </div>
            {/* <button onClick={handleHash}>Submit</button> */}
            {bucketsRender}
        </div>
    )
}

export default HashMapDemo2
