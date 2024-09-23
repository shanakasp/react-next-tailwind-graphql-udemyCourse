import React from "react";

const TaskInput = ({ newTask, setNewTask, addTask }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
