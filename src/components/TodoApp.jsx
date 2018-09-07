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
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(value){
    this.setState({ value });
  }

  render() {
    return (
      <div className="todo-app">
        <TodoAdd value={this.state.value} onChange={this.addTodo} />
        <TodoList items={items} />
      </div>
    );
  }
}

export default TodoApp;
