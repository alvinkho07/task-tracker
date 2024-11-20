import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import "./App.css";


function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Study React" },
        { id: 2, text: "Complete Assignment" },
        { id: 3, text: "Take a Break" },
    ]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div style={{ margin: "20px" }}>
            <h1>Task Tracker</h1>
            <AddTask onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default App


