import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Back from '../goBack'
import './hashmap.css'

function HashMap() {
    return (
        <div className="Hash">
            <div className="top-bar">
                <Back />
                <Link to="/HashDemo2" className="gettingStarted">Visualize it!</Link>                
            </div>

            <h1 className="title"><b>HASHMAP</b></h1>

            <div className="info">
                <div className="what-is-it">
                    <h5 className="subt-what-is-it"><b className="test">WHAT IS IT?</b></h5>
                    <ul>
                        <li>Speeds up search time by cutting costs from O(N) to O(log(N))</li>
                        <li>Uses Hashvalues as a way of finding values</li>
                        <li>Stores data in (key,value) pairs</li>
                    </ul>
                </div>
                <div className="hash-value">
                    <h5 className="subt-hash-value"><b>WHAT IS A HASHVALUE?</b></h5>
                    <ul>
                        <li>It's a unique value (usually prime) that evenly distributes data</li>
                        <li>Used in calculating which BUCKET a piece of data is assigned to</li>
                        <li>Typically 5-digits long</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="example">
                    <div>
                        <h5>
                            <b>Example: How do we calculate the bucket for 'cat' 
                                given 10 TOTAL BUCKETS and a HASHVALUE of 91283?</b>
                        </h5>
                    </div>
                    <ul className="cat-example">
                        <li>(Every character has a numerical value accessible by the 'ord' command)</li>
                            <ul>ord('c'): 99 * 91283 =  9,037,017</ul>
                            <ul>ord('a'): 97 * 91283 = 8,854,451</ul>
                            <ul>ord('t'): 116 * 91283 = 10,588,828</ul>
                        <li>And finally: 28,480,296 % 10 (buckets) = 6, the bucket 'cat' is added to</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(HashMap)
