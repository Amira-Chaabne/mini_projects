import { useSelector } from "react-redux";
import { Rootstate } from "../../app/store";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import { Divider } from "@mantine/core";

export default function TodoApp() {
  const todos = useSelector((state: Rootstate) => state.todos);

  return (
    <div className="max-w-lg mx-auto">
      <TodoForm />
      <Divider my="lg" />
      <div className="flex flex-col gap-4">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">
            😎 The to-do list is chilling for now! Let's light it up with some
            tasks! 🔥
          </p>
        ) : (
          todos.map((todo, index) => <TodoList todo={todo} index={index} />)
        )}
      </div>
    </div>
  );
}
