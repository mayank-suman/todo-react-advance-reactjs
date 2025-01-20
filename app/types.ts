// src/types.ts

export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
    export interface AppContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
  }
  