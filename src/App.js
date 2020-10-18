import React from 'react'
import './App.css'
import items from './items.json'
import Item from './components/Item'

function App() {
    return (
        <div className="App">
            { items.map( item => <Item item={ item } /> )}
        </div>
    )
}

export default App
