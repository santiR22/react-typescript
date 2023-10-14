import { useState } from "react";
import { TaskList } from "./TaskList";

export const TodoApp = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleTask = () => {
    if (task.trim() === "") return;
    setTaskList((previous_tasks) => [...previous_tasks, task]);
    setTask("");
  };

  const handleDelete = (index: number) => {
    setTaskList((tasks) => tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="nueva tarea..."
        />
        <button onClick={handleTask}>Add task</button>
      </div>
      <TaskList taskList={taskList} deleteTask={handleDelete} />
    </div>
  );
};
