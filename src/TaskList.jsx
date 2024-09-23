import React from "react";

const ListTask = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <div>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              {task.text}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListTask;
