import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";
import { useTasks } from "../hooks/useTasks";

function TaskList() {
  const { tasks } = useTasks();
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
