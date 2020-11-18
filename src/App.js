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
                    <Route path="/algorithm_racing" exact component={Homepage} />

                    <Route path="/algorithm_racing/BubbleSort" exact component={BubbleSort} />
                    <Route path="/algorithm_racing/DVBubbleSort" exact component={DVBubbleSort} />

                    <Route path="/algorithm_racing/InsertionSort" exact component={InsertionSort} />
                    <Route path="/algorithm_racing/DVInsertionSort" exact component={DVInsertionSort} />

                    <Route path="/algorithm_racing/MergeSort" exact component={MergeSort} />
                    <Route path="/algorithm_racing/DVMergeSort" exact component={DVMergeSort} />
                    
                    <Route path="/algorithm_racing/RadixSort" exact component={RadixSort} />
                    <Route path="/algorithm_racing/DVRadixSort" exact component={DVRadixSort} />

                    <Route path="/algorithm_racing/HashMap_1" exact component={HashMap} />
                    <Route path="/algorithm_racing/HashMap_2" exact component={HashMap2} />
                    <Route path="/algorithm_racing/HashDemo" exact component={HMDemo} />
                    <Route path="/algorithm_racing/HashDemo2" exact component={HMDemo2} />

                    <Route path="/algorithm_racing/Stack" exact component={Stack} />

                </Switch>
            </div>
        </Router>
    )
}

export default App