"use client";

import { Item } from "@/modals/todo";
import { useState } from "react";

type TodoProps = { deleteTodo: (id: number) => void; todo: Item };
const Todo = ({ todo, deleteTodo }: TodoProps) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <input
          checked={check}
          onChange={() => setCheck(!check)}
          type="checkbox"
          id={String(todo.id)}
        />
        <p className={check ? `line-through` : ""}>{todo.name}</p>
      </div>
      <div
        className="w-7 h-7 ml-10 pl-3 cursor-pointer"
        onClick={() => deleteTodo(todo.id)}>
        <div className="cancel-btn-part rotate-45"></div>
        <div className="cancel-btn-part -rotate-45"></div>
      </div>
    </div>
  );
};

export default Todo;
