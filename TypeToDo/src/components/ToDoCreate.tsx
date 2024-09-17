import React from 'react'
import { useDispatch } from 'react-redux'
import  {useState} from 'react';
import { createTodo } from '../redux/toDoSlice';
import { ToDoType } from '../types/Types';

const ToDoCreate = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = ()=>{
    if (newTodo.trim().length==0) {
      alert("todo giriniz")
      return;
    }
    const payload: ToDoType = {
      id: Math.floor(Math.random()*99999999),
      content: newTodo
    }
    dispatch(createTodo(payload))
    setNewTodo("");
  }

  return (
    <div className='todo-create'>
      <input
       placeholder='ToDo giriniz' className='todo-input' type="text"
       value={newTodo}
       onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)}
       />
      <button onClick={handleCreateTodo} className='todo-button'>Oluştur</button>
    </div>
  )
}

export default ToDoCreate
