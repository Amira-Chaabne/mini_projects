import { Card, UnstyledButton } from "@mantine/core";
import { useDispatch } from "react-redux";
import { TodoState } from "../../features/todoSlice";
import EditModal from "../TodoForm/EditModal";

interface TodoProps {
  todo: TodoState;
  index: number;
}

export default function TodoList({ todo, index }: TodoProps) {
  return (
    <Card className="border flex justify-between items-center gap-4 p-2">
      <div>
        <p>
          {todo.id}. {todo.title}
        </p>
        <p className="text-gray-400 text-xs leading-4 italic mt-1">
          {todo.desc}
        </p>
      </div>
      <div className="flex flex-col">
        <UnstyledButton>Remove</UnstyledButton>
        <EditModal id={todo.id} />
      </div>
    </Card>
  );
}
