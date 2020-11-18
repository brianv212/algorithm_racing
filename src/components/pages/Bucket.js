import React from 'react'
import './Bucket.css'


// Not in any particular folder because it's used by many algorithms
const Bucket = ({ id, data }) => {
    const renderedData = data.map((item) => <h3> {`${item}`} </h3>)
    return (
        <div className="Bucket">
            <h2>{id}</h2>
            {renderedData}
        </div>
    )
}

export default Bucket