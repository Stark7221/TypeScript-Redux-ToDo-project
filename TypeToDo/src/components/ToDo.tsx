import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { ToDoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, UpdateTodo } from '../redux/toDoSlice';
import { useState } from 'react';

interface todoProps{
  todoProps : ToDoType
}

const ToDo = ({todoProps} : todoProps) => {
  const {id,content} = todoProps;
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false)
  const [newTodo, setNewTodo] = useState<string>(content)

   const handleRemoveTodo = ()=>{
     dispatch(removeTodoById(id))
   }

   const handleUpdateTodo=()=>{
    const payload:ToDoType ={
      id:id,
      content: newTodo
    }
    dispatch(UpdateTodo(payload))
    setEditable(false)
   }


  return (
    <div style={{
        display:'flex', flexDirection:"row",alignItems:'center',
        justifyContent:'space-between', border:"1px solid lightgray",
        padding:"16px",marginTop:"25px", borderRadius:"5px"
        }}>
      {editable ? <input type='text' value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/> : <div>{content}</div>}
      <div className='icons'>
        <CiCircleRemove onClick={handleRemoveTodo}/>
        {editable ? <FaCheck onClick={handleUpdateTodo} style={{color:"green"}}/> : <FaRegEdit onClick={()=> setEditable(true)}/> }
      </div>
    </div>
  )
}

export default ToDo
