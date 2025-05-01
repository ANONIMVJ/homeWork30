import { GetServerSideProps } from "next";
import TodoList from "../components/TodoList";
import { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  return { props: { todos } };
};

export default function ServerTodos({ todos }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Server Side Rendered Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
}
