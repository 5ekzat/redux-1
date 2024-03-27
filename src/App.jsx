import React from 'react'
import ReactCounter from './ReactCounter'
import ReduxCounter from './ReduxCounter'
import TodoReact from './TodoReact'
import TodoReducer from './TodoReducer'

const App = () => {
  return (
    <div>
      <ReactCounter/>
      <hr />
      <ReduxCounter/>
      <br />
      <TodoReact/>
      <hr />
      <TodoReducer/>
    </div>
  )
}

export default App