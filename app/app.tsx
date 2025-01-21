"use client";
import React, { createContext, useContext, useReducer, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskProvider from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <TaskInput />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
