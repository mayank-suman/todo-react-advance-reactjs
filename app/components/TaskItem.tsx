import React, { SyntheticEvent } from "react";
import { Task } from "../types";
import { useTasks } from "../hooks/useTasks";

function getDataIdFromParent(event: React.SyntheticEvent<EventTarget, Event>) {
  if (
    !(
      event.target instanceof HTMLButtonElement ||
      event.target instanceof HTMLInputElement
    )
  ) {
    return "";
  }
  return event.target.parentElement?.dataset["id"] || "";
}

function TaskItem({ task }: { task: Task }) {
  const { deleteTask, toggleComplete } = useTasks();

  const onDeleteButtonClick = (event: SyntheticEvent<EventTarget>) => {
    deleteTask(getDataIdFromParent(event));
  };

  const onCheckboxChange = (event: SyntheticEvent<EventTarget>) => {
    toggleComplete(getDataIdFromParent(event));
  };

  return (
    <div key={task.id} data-id={task.id} className="task-item">
      <input
        type="checkbox"
        defaultChecked={task.completed}
        onChange={onCheckboxChange}
      />
      <p className={`${task.completed ? "strikeThrough" : ""}`}>{task.text}</p>
      <button type="button" onClick={onDeleteButtonClick}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
