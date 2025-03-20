import React, { useState } from "react";
import "./App.css"; // Import CSS file

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = () => {
    if (task.trim() === "") return; // Prevent empty tasks

    const updatedTasks = [...tasks, task].sort(); // Add and sort alphabetically
    setTasks(updatedTasks);
    setTask(""); // Clear input field
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h2>To-Do List</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{t}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-tasks">No tasks added yet.</p>
      )}
    </div>
  );
};

export default TodoApp;
