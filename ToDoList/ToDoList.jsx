// Modify the TodoList by adding a "remove" button to each li tag.
// When clicked, the event handler should remove corresponding item from the todos array.

import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();

    const todo = event.target.elements.todo.value;

    setTodos((todos) => [...todos, todo]);

    event.target.elements.todo.value = "";
  }

  function handleResetTodos() {
    setTodos([]);
  }

  function handleRemoveli(removeTodos) {
    setTodos(
      todos.filter((_, index) => {
        return index !== removeTodos;
      })
    );
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input data-testid="todo-input" name="todo" />
        <button type="submit">Add</button>
      </form>
      <button onClick={handleResetTodos}>Reset</button>

      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleRemoveli(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
