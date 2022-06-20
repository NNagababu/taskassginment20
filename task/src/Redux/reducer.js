import {createSlice} from '@reduxjs/toolkit'

const initialState=[];

const addTaskReducer=createSlice({
  name:'task',
  initialState,
  reducers:{

    addTask:(state,action)=>{
        state.push(action.payload)
        return state

    },

    removeTask:(state,action)=>{
      return state.filter((item)=>item.id!==action.payload);
    },

    completeTask:(state,action)=>{
      return state.map((td)=>{
        if(td.id===action.payload){
            return{
                ...td,
                completed:true,
            }
        }
        return td;
      })
    },

  }
})




export const {
    addTask,
    removeTask,
    completeTask
}=addTaskReducer.actions;


export const TaskReducer=addTaskReducer.reducer;
