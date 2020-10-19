import React from 'react'
import './App.css'
import items from './items.json'

import Item from './components/Item'

import getRandomItem from './utils/getRandomItem'

function App() {
    return (
        <div className="App">
            { <Item item={getRandomItem(items)} /> }
        </div>
    )
}

export default App
