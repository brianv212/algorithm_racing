import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './hashmapDemo.css'
import Bucket from '../Bucket'
import Back from '../goBack'

class HMDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonTracker: [
                { clicked: false },{ clicked: false },{ clicked: false },
                { clicked: false },{ clicked: false },{ clicked: false },{ clicked: false },
                { clicked: false },{ clicked: false },{ clicked: false },{ clicked: false }],
            list: [
                { bucket: 0, data: [] },{ bucket: 1, data: [] },{ bucket: 2, data: [] },
                { bucket: 3, data: [] },{ bucket: 4, data: [] },{ bucket: 5, data: [] },{ bucket: 6, data: [] },
                { bucket: 7, data: [] },{ bucket: 8, data: [] },{ bucket: 9, data: [] },
            ]
        }
    }

    getHash(word,hval) {
        let hash = 0
        for (let i = 0; i < word.length; i++) {
            hash += hval * word.charCodeAt(i)
        }
        hash = hash % 10
        return hash
    }

    handleClick(val,word,hval) {
        let buttonCopy = this.state.buttonTracker
        if (buttonCopy[val].clicked === false) {
            buttonCopy[val].clicked = true //Address warning 'setState'. Find better option?
            this.setState({buttonTracker: buttonCopy})
        }

        let hash = this.getHash(word,hval)

        let listCopy = this.state.list
        listCopy[hash].data.push(word)
        this.setState({list: listCopy})
    }


    render() {
        const { h } = this.props.location.state
        const bucketsRender = this.state.list.map((bucket,index) => (
            <Bucket id={bucket.bucket} data={bucket.data} key={index} />
        ))

        return (
            <div>
                <Back />
                <p>Hash Value: {h}</p>
                <div className="HMDemo">
                    <div className="buttons">
                        <button
                            onClick={this.handleClick.bind(this, 0, 'computer', h)}
                            disabled={this.state.buttonTracker[0].clicked}>
                            COMPUTER
                        </button>
                        <button onClick={this.handleClick.bind(this, 1, 'data', h)}
                            disabled={this.state.buttonTracker[1].clicked}>
                            DATA
                        </button>
                        <button onClick={this.handleClick.bind(this, 2, 'science', h)}
                            disabled={this.state.buttonTracker[2].clicked}>
                            SCIENCE
                        </button>
                        <button onClick={this.handleClick.bind(this, 3, 'peter', h)}
                            disabled={this.state.buttonTracker[3].clicked}>
                            PETER
                        </button>
                        <button onClick={this.handleClick.bind(this, 4, 'anteater', h)}
                            disabled={this.state.buttonTracker[4].clicked}>
                            ANTEATER
                        </button>
                        <button onClick={this.handleClick.bind(this, 5, 'school', h)}
                            disabled={this.state.buttonTracker[5].clicked}>
                            SCHOOL
                        </button>
                        <button onClick={this.handleClick.bind(this, 6, 'bren', h)}
                            disabled={this.state.buttonTracker[6].clicked}>
                            BREN
                        </button>
                        <button onClick={this.handleClick.bind(this, 7, 'zot', h)}
                            disabled={this.state.buttonTracker[7].clicked}>
                            ZOT
                        </button>
                        <button onClick={this.handleClick.bind(this, 8, 'irvine', h)}
                            disabled={this.state.buttonTracker[8].clicked}>
                            IRVINE
                        </button>
                        <button onClick={this.handleClick.bind(this, 9, 'visual', h)}
                            disabled={this.state.buttonTracker[9].clicked}>
                            VISUAL
                        </button>
                        <button onClick={this.handleClick.bind(this, 10, 'hashmap', h)}
                            disabled={this.state.buttonTracker[10].clicked}>
                            HASHMAP
                        </button>
                    </div>
                </div>
                {bucketsRender}
            </div>
        )
    }
}

export default withRouter(HMDemo)
