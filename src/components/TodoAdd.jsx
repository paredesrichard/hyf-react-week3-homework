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
      <button onClick={props.onButtonClick}>Add Todo</button>
    </div>
  );
}

export default TodoAdd;
