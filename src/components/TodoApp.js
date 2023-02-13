import React, { useState } from 'react'
// import useForm from './Read';
import './TodoApp.css';

const TodoApp = () => {
  var [toDos,setToDos] = useState([])
  //  useForm({todo:"",qty:"",des:""})
  var [toDo,setToDo] = useState('')

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
        <input name='todo'
        value={toDo} onChange={(event)=>setToDo(event.target.value)}
        type="tex" placeholder='Enter Todo Items'></input>
        {/* <input name='qty'
        value={toDos.qty} onChange={setToDos}
        type="tex" placeholder='Enter quantity'></input><br></br>
        <input name='des'
        value={toDos.des} onChange={setToDos}
        type="tex" placeholder='Enter description'></input> */}
        <button onClick={addTodo}>ADD</button>
      </form>
      
      <div className='todos'>
        { toDos.map((value)=>{

      return (
        <div className='todo'>
          <p>{value}
          {/* <button id='dlt' onClick={}>Delete</button> */}
          </p>

            {/* // <p>{toDos.todo}</p><br></br>
            // <p>{toDos.qty}</p><br></br>
            // <p>{toDos.des}</p> */}
        </div>
        )
          })

        }
      </div>
        
     
    </div>
    
  )
}

export default TodoApp
