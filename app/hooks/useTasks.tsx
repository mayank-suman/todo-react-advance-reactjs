import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTasks = () => {
  const task = useContext(TaskContext);

  if (!task) {
    throw new Error("task context not found");
  }

  return task;
};
