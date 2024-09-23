import { useState } from "react";
import "./App.css";
import TaskInput from "./TaskInput";
import ListTask from "./TaskList";

function App() {
  const [tasks, setTasks] = useState("");
  const [newTask, setNewTask] = useState("");

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput></TaskInput>
      <ListTask tasks={tasks}></ListTask>
    </div>
  );
}

export default App;
