"use client";
import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskProvider from "./context/TaskContext";

// TODO: style the todo list
// TODO: style the layout
// TODO: sort the list items as per completed status
// TODO: use redux to store the state
function App() {
  return (
    <TaskProvider>
      <TaskInput />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
