import "./style.css"
import React, { useState  }from 'react'
import Task from './Task'
import List from './List'




const Main = () => {
    const[tasks , setTask] = useState([]);

    const addTask = (task) =>{
        setTask([...tasks, task])
    }

    const handleDeleteTask = (index)=>{
        const newTask = tasks.filter((_,i)=> i !== index);
        setTask(newTask);
    }

  return (
   

    <div>
    <List addTask={addTask} />
   <Task tasks={tasks} onDelete={handleDeleteTask}/>
    </div>
   
    
  )
}

export default Main
