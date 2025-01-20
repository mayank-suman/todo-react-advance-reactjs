import React from "react";
import { Task } from "../types";

function TaskItem({ task }: { task: Task }) {
  console.log("task.text", task.text);
  return (
    <div key={task.id}>
      <span>
        <p>{task.text}</p>
      </span>
    </div>
  );
}

export default TaskItem;
