import { useState } from "react";
export default function App(){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newTask = {id:tasks.length+1, description:task, checked: false};
        setTasks([...tasks, newTask]);
        setTask('');
    }
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
   
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <input type="text" placeholder="New Task" value={task} id="item"
    onChange={(e)=>setTask(e.target.value)}
    />
    <button className="btn" type="submit">Add</button>
    </div>
    
</form>
  
    <ul className="task-section">
        {tasks
        .map(task=><li className="task-item-container" key={task.id}>
            <div className="task-info">
                <input type="checkbox" 
                checked={task.checked} 
                onChange={()=>taskComplete(task.id)}
                /><span className={task.checked ? 'completed' : ''}>
                {task.description}
                </span>
                </div>
                <button onClick={()=>deleteTask(task.id)} className="btn btn-del">
                    Del
                    </button>
                    </li>)
        }
    </ul>
</div>
}

