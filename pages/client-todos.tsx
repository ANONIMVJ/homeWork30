import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import { Todo } from "../types/todo";

export default function ClientTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Client Side Rendered Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
}
