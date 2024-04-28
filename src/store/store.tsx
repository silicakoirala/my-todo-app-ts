
import { create } from "zustand"; // This imports the `create` function from Zustand for creating a store

import { TodoStore } from "../interfaces/interfaces";


// Create a Zustand store for managing todos

const useStore = create<TodoStore>((set) => ({
    // Initialize todos array as empty
  todos: [],
    // Method to add a new todo
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    // Method to remove a todo by its ID
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
   // Method to toggle the completion status of a todo by its ID
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    })),
}));

// Export the store for usage in other components
export default useStore;
