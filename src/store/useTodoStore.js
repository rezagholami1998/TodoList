import axios from "axios";
import { create } from "zustand";
/////////////////////////////////
export const useTodoStore = create((set) => ({
  todos: [],
  getTodos: async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    set({ todos: response.data });
  },
  addTodo: async (newTodo) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newTodo
    );
    set((state) => ({ todos: [...state.todos, response.data] }));
  },
  deleteTodo: async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },
}));
