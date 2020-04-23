export const initialState = {
    todoList: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        }
    ]
}


export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                todoList: [...state.todoList, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
        case "TOGGLE_ITEM":
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id === action.payload) {
                        return {...item, completed: !item.completed}
                    } else {
                        return item
                    }
                })
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todoList: state.todoList.filter(item => !item.completed)
            }
        default:
            return state;
    }
    
}