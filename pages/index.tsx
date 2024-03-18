import Image from "next/image";
import InputTodo from "../components/InputTodo";
import { useState } from "react";
import { Item } from "@/modals/todo";
import Todo from "@/components/Todo";

export default function Home() {
  const [todos, setTodos] = useState<Item[]>([]);

  function addTodo(name: string) {
    const todo = { id: Date.now(), name };
    setTodos([...todos, todo]);
  }
  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="main-background flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col p-4 rounded-xl">
        <div className="flex items-center justify-start gap-1">
          <h1 className="m-0 font-bold text-lg head-color">TO-DO LIST</h1>
          <Image src="/todo-image.png" alt="todo" width={50} height={50} />
        </div>
        <InputTodo addTodo={addTodo} />
        <div className="flex flex-col gap-4 mt-6">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </div>
      </div>
    </div>
  );
}
