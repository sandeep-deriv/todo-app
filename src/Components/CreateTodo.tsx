import React from "react";

interface CreateTodoProps {
  todo: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateTodo = ({ handleSubmit, todo, handleChange }: CreateTodoProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="type here..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateTodo;
