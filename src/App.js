import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header'
import Homepage from './components/pages/HomePage/homepage'

import HashMap from './components/pages/HashMap/hashmap'
import HashMap2 from './components/pages/HashMap/hashmap2'
import HMDemo from './components/pages/HashMap/hashmapDemo'
import HMDemo2 from './components/pages/HashMap/HashMapDemo2'

import Stack from './components/pages/StackQueue/Stack'

import BubbleSort from './components/pages/BubbleSort/BubbleSort'
import DVBubbleSort from './components/pages/BubbleSort/DVBubbleSort'

import InsertionSort from './components/pages/InsertionSort/InsertionSort'
import DVInsertionSort from './components/pages/InsertionSort/DVInsertionSort'

import MergeSort from './components/pages/MergeSort/MergeSort'
import DVMergeSort from './components/pages/MergeSort/DVMergeSort'

import RadixSort from './components/pages/RadixSort/RadixSort'
import DVRadixSort from './components/pages/RadixSort/DVRadixSort'


import './index.css'
import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/algorithm-racing" exact component={Homepage} />

                    <Route path="/BubbleSort" exact component={BubbleSort} />
                    <Route path="/DVBubbleSort" exact component={DVBubbleSort} />

                    <Route path="/InsertionSort" exact component={InsertionSort} />
                    <Route path="/DVInsertionSort" exact component={DVInsertionSort} />

                    <Route path="/MergeSort" exact component={MergeSort} />
                    <Route path="/DVMergeSort" exact component={DVMergeSort} />
                    
                    <Route path="/RadixSort" exact component={RadixSort} />
                    <Route path="/DVRadixSort" exact component={DVRadixSort} />

                    <Route path="/HashMap_1" exact component={HashMap} />
                    <Route path="/HashMap_2" exact component={HashMap2} />
                    <Route path="/HashDemo" exact component={HMDemo} />
                    <Route path="/HashDemo2" exact component={HMDemo2} />

                    <Route path="/Stack" exact component={Stack} />

                </Switch>
            </div>
        </Router>
    )
}

export default App