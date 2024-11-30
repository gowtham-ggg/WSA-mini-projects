import React from 'react';
import TaskListsRender from './TaskListsRender';

const Task = ({ tasks, onDelete }) => {
    return (
        <>
            <h3>Your Tasks</h3>
            <ul>
                {tasks.map((task, index) => (
                    <TaskListsRender
                        key={index}
                        taskName={task}
                        onDelete={() => onDelete(index)}
                    />
                ))}
            </ul>
        </>
    );
};

export default Task;
