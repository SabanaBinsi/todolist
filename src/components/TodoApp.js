// import React, { useState } from 'react'
import useForm from './Read';
import './TodoApp.css';

const TodoApp = () => {
  var [toDos,setToDos] = useForm({todo:"",qty:"",des:""})
  // var [toDo,setToDo] = useState('')

  const handleSubmit =(e) =>{
    e.preventDefault();
  }

  // const addTodo = () => {
  //   setToDos ([...toDos,toDo])
  //   console.log(toDos)
  //   setToDo (' ')
  // }
  return (

    <div className='header'>
      <h1>ToDo List</h1>
      <form className='input-sect' onSubmit={handleSubmit}>
        <input name='todo'
        value={toDos.todo} onChange={setToDos}
        type="tex" placeholder='Enter Todo Items'></input><br></br>
        <input name='qty'
        value={toDos.qty} onChange={setToDos}
        type="tex" placeholder='Enter quantity'></input><br></br>
        <input name='des'
        value={toDos.des} onChange={setToDos}
        type="tex" placeholder='Enter description'></input>
        <button>ADD</button>  </form>
      
      <div className='todos'>
        {/* { toDos.map((value)=>{

      return ( */}
        <div className='todo'>
            <p>{toDos.todo}</p><br></br>
            <p>{toDos.qty}</p><br></br>
            <p>{toDos.des}</p>
        </div>
        {/* ) */}
          {/* }) */}

        {/* } */}
      </div>
        
     
    </div>
    
  )
}

export default TodoApp
