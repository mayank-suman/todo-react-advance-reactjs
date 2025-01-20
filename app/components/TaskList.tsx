import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

function TaskList({ tasks }: { tasks: Task[] }) {
  console.log("tasks", tasks);
  return (
    <>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </>
  );
}

export default TaskList;
