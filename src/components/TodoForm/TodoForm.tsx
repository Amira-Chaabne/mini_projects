import { TextInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { addTodo } from "../../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../../app/store";

interface FormValues {
  title: string;
  desc: string;
}

export default function TodoForm() {
  const todos = useSelector((state: Rootstate) => state.todos);

  const form = useForm<FormValues>({
    initialValues: {
      title: "",
      desc: "",
    },

    validate: {
      title: (value) =>
        value.length > 0
          ? null
          : "You have to add a todo first ... we don't encourage laziness xD",
    },
  });

  const dispatch = useDispatch();

  function handleTodo(values: FormValues) {
    console.log(values);
    dispatch(
      addTodo({
        id: todos[todos.length - 1].id + 1,
        title: values.title,
        desc: values.desc,
      })
    );
    form.reset();
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => handleTodo(values))}
      className="flex flex-col gap-2"
    >
      <TextInput
        label="What's your plans for today ?"
        placeholder="Add your todo here"
        {...form.getInputProps("title")}
      />
      <TextInput
        placeholder="Add description for the task"
        {...form.getInputProps("desc")}
      />
      <Group position="right">
        <Button type="submit" className="bg-blue-400 transition-all">
          Go
        </Button>
      </Group>
    </form>
  );
}
