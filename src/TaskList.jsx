import React from "react";

const ListTask = (props) => {
  return (
    <div>
      <ul>
        {props.tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          props.tasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" checked={task.completed} readOnly />
              {task.text}
              <button>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListTask;
