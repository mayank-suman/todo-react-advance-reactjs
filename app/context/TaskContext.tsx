import { PropsWithChildren, createContext, useReducer } from "react";
import { AppContextType, Task } from "../types";

const reducer = (state: Task[], action: { type: string; payload: any }) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now().toString(), text: action.payload, completed: false },
      ];

    case "delete":
      return state.filter((task) => task.id != action.payload);

    case "toggle_complete":
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });

    default:
      return state;
  }
};

export const TaskContext = createContext<AppContextType | null>(null);

function TaskProvider({ children }: PropsWithChildren) {
  const [tasks, dispatch] = useReducer(reducer, []);
  const addTask = (text: string) => dispatch({ type: "add", payload: text });
  const deleteTask = (id: string) => dispatch({ type: "delete", payload: id });
  const toggleComplete = (id: string) =>
    dispatch({ type: "toggle_complete", payload: id });

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
