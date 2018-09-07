import React from "react";

function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          props.changeStatus(props.id);
        }}
        checked={props.done}
      />
      <span className={props.done ? "task-completed" : ""}>{props.text}</span>
      <button
        onClick={() => {
          props.onRemoveItem(props.id);
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default TodoItem;
