import React from "react";

function TodoAdd(props) {
  return (
    <div className="todo-add">
      <input
        type="text"
        onChange={e => {
          props.onChange(e.target.value);
        }}
        value={props.value}
      />
      <button>Add Todo</button>
    </div>
  );
}

export default TodoAdd;
