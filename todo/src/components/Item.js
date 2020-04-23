import React from 'react'

const Item = props => {
    console.log(props)
    return (
        <p
            onClick={() => props.markAsCompleted(props.item.id)}
            style={props.item.completed ? {textDecoration: "line-through"} : null}>{props.item.item}</p>
    )
}

export default Item