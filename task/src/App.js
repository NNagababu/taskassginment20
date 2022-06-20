

import React from 'react'
// import Items from './Components/Items'
import Task from './Components/Task'
import './App.css'
import DisplayTask from './Components/DisplayTask'
const App = () => {
  return (
    <div className='App'>
      <h1>Task</h1>
      <div>
        <Task/>
        <DisplayTask/>
      </div>
    </div>
  )
}

export default App;




// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App