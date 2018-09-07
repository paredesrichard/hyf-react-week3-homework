import React from "react";

function TodoItem(props) {
  return (
    <li>
      <input type="checkbox" checked={props.done} />
      <span>{props.text}</span>
    </li>
  );
}

export default TodoItem;
