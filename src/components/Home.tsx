import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Home: React.FC = () => {
  return (
    <>
    <TodoList />
    <AddTodo />
    </>
    );
}

export default Home