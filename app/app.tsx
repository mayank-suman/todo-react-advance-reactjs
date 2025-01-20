"use client";
import React, { useReducer, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import { Task } from "./types";

function App() {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const reducer = (state: Task[], action: { type: string; payload: any }) => {
    switch (action.type) {
      case "add_task":
        return [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ];
      default:
        return state;
    }
  };
  const [tasks, dispatch] = useReducer(reducer, []);

  const addTask = (text: string) =>
    dispatch({ type: "add_task", payload: text });

  return (
    <div>
      <TaskInput setTasks={addTask} tasks={tasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
