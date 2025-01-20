"use client";
import React, { SyntheticEvent, useRef, useState } from "react";
import { Task } from "../types";

function TaskInput({
  setTasks,
  tasks,
}: {
  setTasks: (text: string) => void;
  tasks: Task[];
}) {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setTasks(inputVal);
    setInputVal("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskInput;
