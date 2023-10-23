import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const addItem = () => {
    const newTask = {
      id: taskList.length + 1,
      title: taskName,
      status: false
    };
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
  };

  const deleteItem = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <div>
        <label htmlFor="task-input"></label>
        <input
          id="task-input"
          placeholder="Add your task here"
          onChange={handleChange}
          value={taskName}
        />
        <button onClick={addItem}>Add Todo</button>
      </div>
      <div>
        <h5>List of tasks</h5>
        {taskList.map((task) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}
          >
            <p>{task.title}</p>
            <p>{task.status ? "Completed" : "Not Completed"}</p>
            <button onClick={() => deleteItem(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;