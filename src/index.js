import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'

import App from './App'
import store from './store'
import { fetchTodos } from './features/todos/todosSlice'

store.dispatch(fetchTodos)

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


// // Log the initial state
// console.log('Initial state: ', store.getState())
// // { todos: [...], filters: {status, colors}}

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => 
//   console.log('State after dispatch: ', store.getState())
// )

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions'})
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers'})
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores'})

// store.dispatch({ type: 'todos/todoToggled', payload: 0 })
// store.dispatch({ type: 'todos/todoToggled', payload: 1})

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: {color: 'red', changeType: 'added'}
// })


// // Stop listening to state updates
// // unsubscribe()

// // Dispatch one more action to see what happens
// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store'})


// console.log('Dispatching actions')
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// console.log('Dispatching complete')


// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// // log: 'Hi'

// console.log('State after dispatch: ', store.getState())

