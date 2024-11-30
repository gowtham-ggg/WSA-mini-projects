import React, { useState } from 'react';

const List = ({ addTask }) => {
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim()) {  
            addTask(newTask);
            setNewTask("");
        }
    };

    return (
        <>
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add</button>
        </>
    );
};

export default List;
