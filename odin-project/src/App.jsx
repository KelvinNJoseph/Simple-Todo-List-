
import { useState } from 'react'
import './App.css'
import { Task } from './task'
function App() {
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState("")
  const handleInput = (event) =>{
    return(
      setNewTask(event.target.value)
    )
  }
  const addTask = () => {
    const todoList = {
      id: task.length === 0 ? 1 : task[task.length -1].id + 1,
      taskName: newTask,
      completed: false
    }
    setTask([...task, todoList])
    
  }
  const deleteTask =(id) => {
    setTask(task.filter((tasks)=>tasks.id !== id )
    )
  }
  const completeTask = (id) => {
    setTask(task.map((tasks) =>
      tasks.id === id ? {...tasks, completed: true}: tasks )
    )
  }
  return (
    <div className="app">
      <div className="inputTasks">
      <h1>Kelvin's Todo List</h1>
      <input onChange={handleInput}/>
      <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
        {
          task.map((tasks)=>{
            return (
              <Task taskName={tasks.taskName} id={tasks.id} deleteTask={deleteTask}
              completeTask={completeTask}
              completed={tasks.completed}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
