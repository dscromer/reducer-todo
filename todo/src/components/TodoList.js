import React, {useState, useReducer} from 'react'
import {initialState, todoReducer} from '../reducers'
import ListItem from './ListItem'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleAdd = e => {
        e.preventDefault();
        dispatch({type: 'ADD_ITEM', payload: newTodo});
        setNewTodo('');
    }

    const markAsCompleted = (id) => {
        dispatch({type: 'TOGGLE_ITEM', payload: id})
    }

    const handleClear = e => {
        dispatch({type: 'CLEAR_COMPLETED'})
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input id='todo' value={newTodo} onChange={handleChange}/>
                <label htmlFor='todo'>New Todo</label>
                <div>
                    <button type="submit">Add Item</button>
                    <button onClick={handleClear}>Clear Completed</button>
                </div>
            </form>
            <ListItem items={state.todoList} markAsCompleted={markAsCompleted} />
        </div>
    )
}

export default TodoList