import React from 'react'
import Item from './Item'

const ListItem = props => {
    return (
        <div>
            <h1>Todo List</h1>
            {props.items.map(item =>
                <Item key={item.id} item={item} markAsCompleted={props.markAsCompleted}/>)}
        </div>
    )
}

export default ListItem