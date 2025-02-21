import Todoitem from './Todoitem'
import { useState } from "react";
function TodoList(){
    const [Tasks, setTasks] = useState(""); 
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        const newItem = { id: Date.now(), item: newTask };
        setTasks([...Tasks, newItem]);
        setNewTask("");
    }
    const deleteTask = (id) => {
        setTasks(Tasks.filter((Task) => Task.id !== id)); 
    }

    const editTask = (id, newItem) => {
        setTasks(
            Tasks.map((Task) =>
                Task.id === id ? { ...Tasks, item: newItem } : Task
            )
        );
    }
    return(
        <div>
        <div className="tdl">
        <input className='search' type="text" value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} placeholder="Add a Task"></input>
        <button onClick={addTask}>ADD</button>
        </div>
        <br></br>
        <br></br>
        <div >
        {Tasks.length>0 ?(Tasks.map((task,key) => 
            <Todoitem
                key={task.id}
                id={task.id}
                item={task.item}
                onDelete={deleteTask}
                onEdit={editTask}
                ></Todoitem> )) : null }
        </div>
        
        
   </div>
    )
}
export default TodoList