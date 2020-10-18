import React from 'react'


const Item = ({ item }) => {
    return (
        <div className="item">
            { item.category_minor } - { item.name }
        </div>
    )
}

export default Item