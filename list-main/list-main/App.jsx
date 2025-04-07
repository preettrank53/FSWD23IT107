import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTasks = () => {
    if(newTask.trim()) {
      setTasks([...tasks, {id: Date.now(), text: newTask}]);
      setNewTask('');
    }
  }

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div className="App">
        <h1>To-Do List</h1>
        <input 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Enter a new task'
        />
        <button onClick={handleTasks}>Add Task</button>
        {tasks.length === 0 ? (
          <p>No tasks to show</p>
        ) : (
          <ul>
            {tasks.map((task) => {
              return(
                <li key={task.id}>
                {task.text}
                <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
              </li>
              )  
            })}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
