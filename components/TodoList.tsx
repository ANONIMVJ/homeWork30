import { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  if (todos.length === 0) {
    return <p className="text-teal-400">No todos found.</p>;
  }

  return (
    <ul className="space-y-4">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`p-4 rounded border shadow-md bg-black ${
            todo.completed
              ? "border-teal-700 text-teal-500 line-through"
              : "border-teal-600 text-teal-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">{todo.title}</span>
            <span
              className={`text-sm px-2 py-1 rounded-full border ${
                todo.completed
                  ? "bg-teal-800 border-teal-500 text-white"
                  : "bg-black border-teal-600 text-teal-300"
              }`}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
