import useStore  from "../store/store";

const AddTodo: React.FC = () => {
  const [text, setText] = useState<string>('');
  const addTodo = useStore ((state)=> state.addTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      id: Math.floor(Math.random() * 1000),
      text,
      completed: false
    });
    setText('');
  }
console.log("Text: ", text);
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