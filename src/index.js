import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'

// Omit existing React imports


// Log the initial state
// console.log('Initial state: ', store.getState())
// { todos: [...], filters: {status, colors}}

// Every time the state changes, log it



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
