import { Todo } from "../interfaces/interfaces";
import useStore from "../store/store";

const TodoList= () => {
  let todos = useStore((state) => state.todos);

  return (
    <div>
      <ul className="list-disc">
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
