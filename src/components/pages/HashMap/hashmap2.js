import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Back from '../goBack'
import './hashmap.css'

function HashMap2 () {
    const [hash, setHash] = useState(42443)
    return (
        <div>
            <Back />
            <div className="options">
                
                <div className="option-one">
                    <h5>Link 1: Demonstrates how different hash values make data organization unique</h5>
                    <div>
                        <div className="form">
                            <form>
                                <p>
                                    <input
                                        type="number"
                                        placeholder="42443"
                                        max={999999}
                                        name="hashValue"
                                        onChange={(event) =>
                                            setHash(event.target.value)
                                        }
                                    />
                                </p>
                            </form>
                            &nbsp;&nbsp;&nbsp;<h5>Current Hash: {hash}</h5>
                        </div>
                        <Link
                            className="submit"
                            to={{
                                pathname: '/HashDemo',
                                state: {
                                    h: hash,
                                },
                            }}>
                            <p className="click-one">Start HashMap Demo 1</p>
                        </Link>
                    </div>
                </div>
                
                <div className="option-two">
                    <h5>Link 2: Visualizes how data is organized evenly between buckets</h5>
                    <Link
                        className="submit"
                        to={{
                            pathname: '/HashDemo2'
                        }}>
                        <p>Start HashMap Demo 2</p>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default HashMap2