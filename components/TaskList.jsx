export default function TaskList({tasks, taskComplete, deleteTask}){
    return  <ul className="task-section">
    {tasks
    .map((task, index)=><li className="task-item-container" key={index}>
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
}