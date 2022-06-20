

import React from 'react'
import '../App.css'

const Items = (props) => {

 const {item,removesTask,completesTask}=props;

  return (
    <div>
        <li key={item.id} className='unorder'>
            
           {item.completed===false && (
            <input type='checkbox' onClick={()=>completesTask(item.id)} />
           )}
           <label className={item.completed?'strike':'unstrike'} >{item}</label>
           <button onClick={()=>removesTask(item.id)}>Del</button>
         
        </li>
    </div>
  )
}

export default Items;



