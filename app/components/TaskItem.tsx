import React from "react";
import { Task } from "../types";

function TaskItem({ task }: { task: Task }) {
  console.log("task.text", task.text);
  return (
    <div key={task.id} className="task-item">
      <input type="checkbox" />
      <p>{task.text}</p>
      <button type="button">Delete</button>
    </div>
  );
}

export default TaskItem;
