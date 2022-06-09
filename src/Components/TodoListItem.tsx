import React from "react";

interface TodoListItemProps {
  id: number;
  text: string;
  has_done: boolean;
  toggleDone: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoListItem = ({
  id,
  has_done,
  toggleDone,
  removeTodo,
  text,
}: TodoListItemProps) => {
  return (
    <li className={(has_done && "has-done") || ""}>
      <span className="text" onClick={() => toggleDone(id)}>
        {text}
      </span>
      <span className="remove" onClick={() => removeTodo(id)}>
        Remove
      </span>
    </li>
  );
};

export default TodoListItem;
