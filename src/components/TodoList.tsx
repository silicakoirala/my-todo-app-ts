import React from "react";
import { Todo } from "../interfaces/interfaces";
import useStore from "../store/store";

const TodoList: React.FC<void> = () => {
  let todos = useStore((state) => state.todos);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos?.map((todo: Todo) => {
          return (
            <li key={todo.id} className={`flex items-center justify-between py-2 ${todo.completed ? "line-through text-gray-500" : ""}`}>
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
