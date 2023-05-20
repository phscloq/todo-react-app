import { useState } from "react";
import Form from "../components/form";
import TaskList from "../components/TaskList";
export default function App(){
    
    const [tasks, setTasks] = useState([]);

   
    const deleteTask = (taskId) =>{
        setTasks(tasks.filter((task) => task.id !== taskId));
    }
    function taskComplete(taskId){
        setTasks(
            tasks.map((task) =>
              task.id === taskId ? { ...task, checked: !task.checked } : task
            )
          );
    }


return <div className="container">
   
    <Form tasks={tasks} setTasks={setTasks}  />
  
   <TaskList tasks={tasks} deleteTask={deleteTask} taskComplete={taskComplete}  />
</div>
}

