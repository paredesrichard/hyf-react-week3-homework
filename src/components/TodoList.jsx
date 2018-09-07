import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  //console.log(props);
  return (
    <ul>
      {props.items.length < 1
        ? "No items"
        : props.items.map(todo => (
            <TodoItem
              id={todo.id}
              changeStatus={props.changeStatus}
              key={todo.id}
              text={todo.description}
              done={todo.done}
              onRemoveItem={props.onRemoveItem}
            />
          ))}
    </ul>
  );
}

export default TodoList;
