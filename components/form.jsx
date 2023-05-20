import { useState } from "react";

export default function Form({tasks, setTasks}){
    const [task, setTask] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newTask = {id:tasks.length+1, description:task, checked: false};
        setTasks([...tasks, newTask]);
        setTask('');
    }

    return  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <input type="text" placeholder="New Task" value={task} id="item"
    onChange={(e)=>setTask(e.target.value)}
    />
    <button className="btn" type="submit">Add</button>
    </div>
    
</form>
}