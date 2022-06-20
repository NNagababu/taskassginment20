

import React, { useState } from 'react'
import {connect} from 'react-redux'

import { addTask } from '../Redux/reducer'

const mapStateToProps=(state)=>{
    return{
        tasks:state,
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        addTask:(obj)=>dispatch(addTask(obj))
    }
}

const Task = (props) => {

    const [task,setTask]=useState('')

    const changeData=(e)=>{
        setTask(e.target.value)
    }

    const add=()=>{
        if(task===''){
            alert('input Task')
        }
        else{
            props.addTask({
                id:Math.floor(Math.random()*100),
                item:task,
                completed:false,
            })
            setTask('')
        }
    }

  return (
    <div>
        <input
        type='text'
        onChange={(e)=>changeData(e)}
        value={task}
        />
        <button onClick={()=>add()} >Add</button>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Task);