interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Array<Todo>;
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export type { Todo, TodoStore };
