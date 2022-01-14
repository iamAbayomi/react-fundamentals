const initialState = {
    todos: [
        {id: 0, text: 'Learn React', completed: true},
        {id: 1, text: 'Learn Redux', completed: false, color : 'purple'},
        {id: 2, text: 'Build Something fun!', completed: false, color:'blue'}
    ],
    filers: {
        status: 'All',
        colors: []
    }
}

function nextTodoId(todos){
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

// Use the initialState as default value
export default function appReducer(state = initialState, action){
    // The reducer normally looks at the action type field to describe what happens
    switch(action.type){
        // Do something here based on the differeny types of actions
        
        default:
            // If this reducer doesn't recognise the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}