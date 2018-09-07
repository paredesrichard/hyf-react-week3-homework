import React from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const items = [
  {
    id: 1,
    description: "Get out of bed",
    done: true
  },
  {
    id: 2,
    description: "Brush teeth",
    done: false
  },
  {
    id: 3,
    description: "Eat breakfast",
    done: false
  }
];

class TodoApp extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <TodoAdd />
        <TodoList items={items} />
      </div>
    );
  }
}

export default TodoApp;
