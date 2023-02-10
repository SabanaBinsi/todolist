import React, { useState } from 'react'
import './TodoApp.css';

const TodoApp = () => {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')

  const handleSubmit =(e) =>{
    e.preventDefault();
  }

  const addTodo = () => {
    setToDos ([...toDos,toDo])
    console.log(toDos)
    setToDo (' ')
  }
  return (

    <div className='header'>
      <h1>ToDo List</h1>
      <form className='input-sect' onSubmit={handleSubmit}>
        <input 
        value={toDo} onChange={(e)=>setToDo(e.target.value)}
        type="tex" placeholder='Enter Todo Items'></input>
        <button onClick={addTodo} >ADD</button>  </form>
      
      <div className='todos'>
        { toDos.map((value)=>{

      return (
        <div className='todo'>
          <div className='left'>
        <input type="checkbox" name='' id=''></input>
        <div className='list'>
            <p>{value}</p>
      </div>
          </div>
        </div>)
          })

        }
      </div>
        
     
    </div>
    
  )
}

export default TodoApp
