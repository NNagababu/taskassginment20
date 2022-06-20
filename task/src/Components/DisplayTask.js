


import React from 'react'
import { connect } from 'react-redux'
import { removeTask,completeTask } from '../Redux/reducer'
import Items from './Items'

const mapStateToProps=(state)=>{
    return{
        text:state,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeTask:(id)=>dispatch(removeTask(id)),
        completeTask:(id)=>dispatch(completeTask(id)),
    }
}

const DisplayTask = (props) => {
  return (
    <div>
        <h1>welcome</h1>
     {props.text.map((item)=>{
        return(
            <Items
            key={item.id}
            item={item}
            removesTask={props.removeTask}
            completesTask={props.completeTask}
            />
        )
     })}
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTask);