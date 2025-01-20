"use client";
import React, { createContext, useContext, useReducer, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskProvider from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
