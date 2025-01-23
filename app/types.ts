export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface AppContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}
