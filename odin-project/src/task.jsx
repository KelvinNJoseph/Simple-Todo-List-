export const Task = (props) => {
  return(<div 
  className="task"
  >
    <h1 style={{color: props.completed ?  "green" : "white"}}>{props.taskName}</h1>
    <button onClick={()=> props.deleteTask(props.id)}>Delete Task</button>
    <button onClick={() => props.completeTask(props.id)}>Complete Task</button>
    </div>)
}