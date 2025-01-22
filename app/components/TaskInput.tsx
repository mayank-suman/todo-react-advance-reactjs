"use client";
import React, { SyntheticEvent, useRef, useState } from "react";
import { useTasks } from "../hooks/useTasks";

function TaskInput() {
  const { addTask } = useTasks();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputVal, setInputVal] = useState("");

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    addTask(inputVal);
    setInputVal("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={onSubmit} className="add-form">
      <input
        ref={inputRef}
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskInput;
