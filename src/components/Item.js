import React from 'react'
import './Item.css'


const Item = ({ item }) => {
    return (
        <div className="item">
            <h1>{ item.category_major }</h1>
            
            { item.category_minor
                ? <>{ item.category_minor } - </>
                : ''
            }
            { item.name }
            <br />
            { item.value
                ? <>Value { item.value }<br /></>
                : ''
            }
            { item.weight
                ? <>Weight { item.weight } lbs</>
                : ''
            }
        </div>
    )
}

export default Item