import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDoİnitialState, ToDoType } from '../types/Types'


const initialState : ToDoİnitialState = {
    todos: [],
    
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{   
     createTodo:(state : ToDoİnitialState , action : PayloadAction<ToDoType>)=>{
        state.todos = [...state.todos,action.payload];
       },
     removeTodoById : (state:ToDoİnitialState,action:PayloadAction<number>)=>{
        state.todos = [...state.todos.filter((todo:ToDoType)=> todo.id!==action.payload)]
     },
     UpdateTodo: (state: ToDoİnitialState,action:PayloadAction<ToDoType>)=>{
        state.todos = [...state.todos.map((todo:ToDoType)=> todo.id !== action.payload.id ? todo: action.payload)]
     }
    }
})

export const {createTodo,removeTodoById,UpdateTodo } = todoSlice.actions
export default todoSlice.reducer