export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

