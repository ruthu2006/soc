import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState(["Sample Task 1", "Sample Task 2"]);
  const [newTask, setNewTask] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const markComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { text: tasks[index].text || tasks[index], done: true };
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To Do List</h1>
      <h2>These are your tasks to complete</h2>

      <ul>
        {tasks.map((task, index) => {
          const isCompleted = typeof task === "object" && task.done;
          const taskText = typeof task === "object" ? task.text : task;
          return (
            <li
              key={index}
              style={{
                backgroundColor: isCompleted ? "lightblue" : "transparent",
                marginBottom: "5px",
                padding: "5px",
              }}
            >
              {taskText}{" "}
              {!isCompleted && (
                <button onClick={() => markComplete(index)}>Complete</button>
              )}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
