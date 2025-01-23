"use client";
import React, { createContext, useContext, useReducer, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskProvider from "./context/TaskContext";

// TODO: style the todo list
// TODO: store the list in the local storage
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
