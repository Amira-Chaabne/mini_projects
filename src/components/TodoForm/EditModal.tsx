import { useDisclosure } from "@mantine/hooks";
import {
  Button,
  Group,
  Modal,
  TextInput,
  Textarea,
  UnstyledButton,
} from "@mantine/core";
import { FormValues } from "./TodoForm";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../../app/store";
import { useEffect } from "react";
import { updateTodo } from "../../features/todoSlice";

export default function EditModal({ id }: { id: number }) {
  const [opened, { open, close }] = useDisclosure(false);

  const todos = useSelector((state: Rootstate) => state.todos);
  const toBeUpdated = todos.filter((todo) => todo.id === id);
  const dispatch = useDispatch();

  const form = useForm<FormValues>({
    initialValues: {
      title: "",
      desc: "",
    },
    validate: {
      title: (value) =>
        value.length > 0 ? null : "You are in the update mode",
    },
  });

  useEffect(() => {
    if (opened && toBeUpdated.length) {
      form.setFieldValue("title", toBeUpdated[0].title);
      form.setFieldValue("desc", toBeUpdated[0].desc);
    }
  }, [opened]);

  function handleUpdateTodo(values: FormValues) {
    dispatch(
      updateTodo({
        id,
        title: values.title,
        desc: values.desc,
      })
    );
    close();
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Edit Todo" centered>
        <form
          onSubmit={form.onSubmit((values) => handleUpdateTodo(values))}
          className="flex flex-col gap-2"
        >
          <TextInput
            label="Todo"
            placeholder="Add your todo here"
            {...form.getInputProps("title")}
          />
          <Textarea
            label="Description"
            placeholder="Description"
            {...form.getInputProps("desc")}
          />
          <Group position="right">
            <Button variant="default" onClick={close}>
              Cancel
            </Button>
            <Button type="submit" variant="outline">
              Update todo
            </Button>
          </Group>
        </form>
      </Modal>
      <UnstyledButton onClick={open}>Edit</UnstyledButton>
    </>
  );
}
