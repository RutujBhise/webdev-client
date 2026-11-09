import { useState } from "react";
import { TodosProvider, useTodosContext } from "./todosContext";

function ContextTodoBody() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("New context todo");
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <div id="wd-context-todos">
      <h3>React Context Todo List</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <input
          id="wd-context-todo-title"
          className="rounded border border-neutral-300 px-2 py-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="button"
          id="wd-context-add-todo"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
          onClick={() => {
            if (editingId) {
              updateTodo({ id: editingId, title });
              setEditingId(null);
            } else {
              addTodo(title);
            }
            setTitle("New context todo");
          }}
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-300 px-3 py-1"
          >
            <span>{todo.title}</span>
            <span className="flex gap-2">
              <button
                type="button"
                className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
                onClick={() => {
                  setTitle(todo.title);
                  setEditingId(todo.id);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <ContextTodoBody />
    </TodosProvider>
  );
}
