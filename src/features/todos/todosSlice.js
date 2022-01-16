import { client } from '../../api/client'
import { createSelector } from 'reselect'

const initialState = []

export const todosLoaded = todos => ({ type: 'todos/todosLoaded', payload: todos })

export const todoAdded = todo => ({type: 'todos/todoAdded', payload: todo})

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [...state, action.payload]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map((todo) => {
        return { ...todo, completed: true }
      })
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed)
    }
    case 'todos/todosLoaded': {
      return action.payload
    }
    default:
      return state
  }
}

// Thunk function
export const fetchTodos = () => async dispatch => {
    const response = await client.get('/fakeApi/todos')
    // dispatch({ type: 'todos/todosLoaded', payload: response.todos })
    dispatch(todosLoaded(response.todos))
  }




export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text }
    const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    dispatch(todoAdded(response.todo))
  }
}


export const selectTodoIds  = createSelector(
  // First, pass one or more "input selector"  functions:
  state => state.todos,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  todos => todo.map( todo => todo.id )
)