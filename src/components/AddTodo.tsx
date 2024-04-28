import { useState } from "react";
import { Todo } from "../interfaces/interfaces";
import useStore from "../store/store";

const AddTodo = () => {
  // State to manage the input field value
  const [text, setText] = useState<string>('');

  const addTodo = useStore((state) => state.addTodo);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Trim the input value and return if it's empty
    if (!text.trim()) return;
    console.log("New Todo:", { id: Date.now(), text, completed: false });

    // Create a new todo object with current timestamp as ID, input text, and false completion status
    // Then add the new todo to the store
    const newTodo: Todo = { id: Date.now(), text, completed: false };

    // Call the addTodo function to add the new todo
    addTodo(newTodo);
    // Clear the input field
    setText('');
  }
    // Render the form for adding todos
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add new todo'
        className="border border-gray-300 px-2 py-1 rounded-md mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-md">Add Todo</button>
    </form>)
}

export default AddTodo