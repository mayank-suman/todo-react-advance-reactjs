// src/types.ts

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface AppContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}
