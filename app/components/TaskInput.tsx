"use client";
import React, { SyntheticEvent, useRef, useState } from "react";
import { useTasks } from "../hooks/useTasks";

function TaskInput() {
  const { dispatch } = useTasks();
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch({ type: "add", payload: inputVal });
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
