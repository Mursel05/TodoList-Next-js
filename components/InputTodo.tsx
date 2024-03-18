"use client";

import { log } from "console";
import { use, useEffect, useRef, useState } from "react";
type InputTodoProps = { addTodo: (name: string) => void };
const InputTodo = ({ addTodo }: InputTodoProps) => {
  const [inputTask, setInputTask] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="input-color rounded-full pl-7 gap-3 flex justify-between items-center">
      <input
        style={{ width: ref.current ? ref.current.offsetWidth - 154 : "max" }}
        className="input-style h-12 w-max"
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="Add your task"
      />
      <button
        className="btn-red p-5 rounded-full px-10 text-white font-medium"
        onClick={() => {
          setInputTask("");
          inputTask != "" && addTodo(inputTask);
        }}>
        ADD
      </button>
    </div>
  );
};

export default InputTodo;
