import React from "react";
import Center from "./Center";
import CreateTodo from "./CreateTodo";
import TodoListItem from "./TodoListItem";

interface TodoItem {
  id: number;
  text: string;
  has_done: boolean;
}

const Todo = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [list_of_todos, setTodos] = React.useState<TodoItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return;

    const new_todo = {
      id: new Date().getTime(),
      text: todo,
      has_done: false,
    };
    const updated_list = [...list_of_todos];
    updated_list.push(new_todo);
    setTodos(updated_list);
    setTodo("");
  };

  const toggleDone = (id: number) => {
    const updated_list = [...list_of_todos];
    const index = updated_list.findIndex((todo) => todo.id === id);
    updated_list[index].has_done = !updated_list[index].has_done;
    setTodos(updated_list);
  };

  const removeTodo = (id: number) => {
    const updated_list = [...list_of_todos];
    const index = updated_list.findIndex((todo) => todo.id === id);
    updated_list.splice(index, 1);
    setTodos(updated_list);
  };

  return (
    <Center>
      <div>
        <div className="form-wrapper">
          <CreateTodo
            todo={todo}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
        <div className="todos-list">
          <ul>
            {list_of_todos.map(({ text, id, has_done }: TodoItem) => (
              <TodoListItem
                key={id}
                id={id}
                text={text}
                has_done={has_done}
                toggleDone={toggleDone}
                removeTodo={removeTodo}
              />
            ))}
            {!list_of_todos.length && (
              <li className="no-todos">No todos yet</li>
            )}
          </ul>
        </div>
      </div>
    </Center>
  );
};

export default Todo;
