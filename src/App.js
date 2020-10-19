import React, { useState } from 'react'
import './App.css'
import items from './items.json'

import Item from './components/Item'

import getRandomItem from './utils/getRandomItem'

function App() {
    const [ selectedItem, setSelectedItem ] = useState(getRandomItem(items))
    return (
        <div className="App">
            <h1>Random item of the day</h1>
            { <Item item={ selectedItem } /> }
            <button onClick={ () => setSelectedItem(getRandomItem(items)) }>New random item</button>
        </div>
    )
}

export default App
// test
