import { supabase } from "../supabase-client";
import { useEffect, useState } from "react";

export default function About() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    useEffect(() => {
      fetchTodos();
    }, []);
    const { data, error } = await supabase.from("TodoList").select("*");
    if (error) {
      console.error("Error fetching todos: ", error.message);
    } else {
      setTodoList(data);
    }
  };

  const addTodo = async () => {
    if (!newTodo) return;

    const { data, error } = await supabase
      .from("TodoList")
      .insert([{ name: newTodo, isCompleted: false }])
      .select()
      .single();

    if (error) {
      console.error("Error adding todo: ", error.message);
    } else {
      setTodoList((prev) => [...prev, data]);
      setNewTodo(" ");
    }
  };

  return (
    <div className="justify-center ">
      <h1>TODO LIST</h1>
      <div>
        <input
          className="border-2"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="cursor-pointer border-black border-2 rounded-md bg-black text-white"
          onClick={addTodo}
        >
          Add Item
        </button>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              {todo.name} - {todo.isCompleted ? "Done" : "Pending"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
