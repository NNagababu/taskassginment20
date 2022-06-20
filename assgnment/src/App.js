

import React from 'react'
import Items from './Components/Items'
import Task from './Components/Task'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <h1>Task</h1>
      <div>
        <Task/>
        <Items/>
      </div>
    </div>
  )
}

export default App;



