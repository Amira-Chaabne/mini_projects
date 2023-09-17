import { Card, UnstyledButton } from "@mantine/core";
import { useDispatch } from "react-redux";
import { TodoState } from "../../features/todoSlice";
// import { removeTodo } from "../../features/todoSlice";

interface TodoProps {
  todo: TodoState;
  index: number;
}

export default function TodoList({ todo, index }: TodoProps) {
  const dispatch = useDispatch();
  return (
    <Card className="border flex justify-between items-center">
      <div>
        <p>
          {todo.id}. {todo.title}
        </p>
        <p className="text-gray-400 text-sm italic">{todo.desc}</p>
      </div>
      <div className="flex flex-col">
        <UnstyledButton>Remove</UnstyledButton>
        <UnstyledButton>Edit</UnstyledButton>
      </div>
    </Card>
  );
}
