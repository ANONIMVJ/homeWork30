import { GetStaticProps } from "next";
import TodoList from "../components/TodoList";
import { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  return {
    props: { todos },
    revalidate: 60,
  };
};

export default function StaticTodos({ todos }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Static Site Generated Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
}
