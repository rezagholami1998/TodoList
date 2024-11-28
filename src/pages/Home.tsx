import { useEffect, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import TodoList from "../components/TodoList";
/////////////////////////////////////////////////////
const Home = () => {
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { todos, getTodos, addTodo, deleteTodo } = useTodoStore();
  //////////////////// for fetch data and use lifecycle (until change data)
  useEffect(() => {
    getTodos();
  }, [getTodos]);
  //////////////////// create data
  const handleAddTodo = () => {
    if (!newTodo) return; //or  newTodo.length == 0
    addTodo({ title: newTodo, completed: true });
    setNewTodo("");
  };
  //////////////////// filter data until search
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  /////////////////// render
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
      <main className="max-w-md xs:mx-4 sm:mx-0 xs:px-6 sm:px-8 py-8 border border-1 rounded-xl shadow-md">
        <h1 className="xs:text-xl sm:text-2xl font-bold text-center mb-4">
          لیست کارها
        </h1>
        <input
          type="text"
          placeholder="جستجو"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-1 w-full p-2 rounded mb-4 text-gray-700 bg-gray-100 outline-none focus:bg-white focus:ring-2 focus:ring-gray-200 focus:border-none"
        />
        <input
          type="text"
          placeholder="کار جدید"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border border-1 w-full p-2 rounded mb-4 text-gray-700 bg-gray-100 outline-none focus:bg-white focus:ring-2 focus:ring-gray-200 focus:border-none"
        />
        <button
          onClick={handleAddTodo}
          className="w-full rounded bg-green-700 py-2  text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-0  transition-colors duration-200 "
        >
          افزودن به لیست
        </button>
        <ul className="overflow-y-auto mt-4 h-96 pl-3">
          {filteredTodos.map((todo) => (
            <TodoList
              description={todo.title}
              keyItem={todo.id}
              onClick={() => deleteTodo(todo.id)}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
