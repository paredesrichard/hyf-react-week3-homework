import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.items.map(todo => (
        <TodoItem text={todo.description} done={todo.done} />
      ))}
    </ul>
  );
}

export default TodoList;
