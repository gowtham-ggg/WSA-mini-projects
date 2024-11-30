import React, { useState } from 'react';

const TaskListsRender = ({ taskName, onDelete }) => {
    const [completed, setCompleted] = useState(false);

    const handleCompleted = () => {
        setCompleted(!completed);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleCompleted}
            />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {taskName}
            </span>
            <button onClick={onDelete} className="deleteButton">
                Delete
            </button>
        </li>
    );
};

export default TaskListsRender;
