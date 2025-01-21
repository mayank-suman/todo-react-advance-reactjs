import { PropsWithChildren, createContext, useReducer } from "react";
import { Task } from "../types";

export const reducer = (
  state: Task[],
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "delete":
      return state.filter((task) => task.id != action.payload);
    default:
      return state;
  }
};

export const TaskContext = createContext<{
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
} | null>(null);

function TaskProvider({ children }: PropsWithChildren) {
  const [tasks, dispatch] = useReducer(reducer, []);
  const addTask = (text: string) => dispatch({ type: "add", payload: text });
  const deleteTask = (id: number) => dispatch({ type: "delete", payload: id });

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
