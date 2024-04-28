import React from 'react';
import { Todo } from '../types'; // Assuming you have a Todo type defined

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  console.log("Todos:", todos);

  return (
    <div>
      <h1>Todo List</h1>
      
      <ul>
        {todos.map((todo) => (
          <li 
            key={todo.id}
            className={`flex items-center justify-between py-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
