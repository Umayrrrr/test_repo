import { Edit, Trash2 } from "lucide-react";
import { supabase } from "../supabase-client";
import { useEffect, useState } from "react";

function Todos() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("todolist")
      .select("*")
      .order("id", { ascending: false });

    if (error) console.error("Error:", error);
    else setTodos(data || []);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleClick = async () => {
    if (!todoInput.trim()) return;
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("todolist").insert({
      user_id: user?.id,
      todo: todoInput,
      isCompleted: false,
    });

    if (!error) {
      setTodoInput("");
      fetchTodos();
    }
  };

  const toggleComplete = async (id, currentStatus) => {
    const { error } = await supabase
      .from("todolist")
      .update({ isCompleted: !currentStatus })
      .eq("id", id);

    if (!error) {
      setTodos(
        todos.map((t) =>
          t.id === id ? { ...t, isCompleted: !currentStatus } : t,
        ),
      );
    }
  };

  const startEditing = (id, currentTodo) => {
    setEditingId(id);
    setEditText(currentTodo);
  };

  const saveEdit = async (id) => {
    const { error } = await supabase
      .from("todolist")
      .update({ todo: editText })
      .eq("id", id);

    if (!error) {
      setTodos(todos.map((t) => (t.id === id ? { ...t, todo: editText } : t)));
      setEditingId(null);
    }
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("todolist").delete().eq("id", id);
    if (!error) {
      setTodos(todos.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="font-bold text-2xl flex justify-center mb-5 bg-gray-900 rounded-xl text-white">
        TO-DO
      </div>
      <div className="flex gap-2 mb-6">
        <input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="border-2 p-2 rounded flex-grow"
          type="text"
          placeholder="Add a task..."
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded shadow-sm"
          >
            <div className="flex items-center gap-3 flex-grow">
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => toggleComplete(item.id, item.isCompleted)}
                className="h-5 w-5 cursor-pointer"
              />

              {editingId === item.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(item.id)}
                  className="border p-1 rounded "
                />
              ) : (
                <span
                  className={`text-lg ${item.isCompleted ? "line-through text-gray-400" : "text-gray-800 font-medium"}`}
                >
                  {item.todo}
                </span>
              )}
            </div>

            <div className="flex gap-3 ml-4">
              {editingId === item.id ? (
                <button
                  onClick={() => saveEdit(item.id)}
                  className="text-green-600 font-bold cursor-pointer"
                >
                  Save
                </button>
              ) : (
                <button onClick={() => startEditing(item.id, item.todo)}>
                  <Edit color="blue" size={20} />
                </button>
              )}
              <button onClick={() => handleDelete(item.id)}>
                <Trash2 color="red" size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
