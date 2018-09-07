import React from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.id = 3;
    this.state = {
      value: "",
      items: [
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
      ]
    };
    this.changeValue = this.changeValue.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  changeValue(value) {
    this.setState({ value });
  }

  addTodoItem() {
    const newItem = {
      id: ++this.id,
      description: this.state.value,
      done: false
    };
    const items = this.state.items;
    items.push(newItem);
    this.setState({ items, value: "" });
  }

  changeStatus(todoId) {
    //console.log(`todo id : ${todoId}`);
    const newItems = this.state.items.map((todo) => {
      if (todo.id !== todoId) return todo;
      else {
        todo.done = !todo.done;
        return todo;
      }
    });
    this.setState({ items: newItems })
  }

  onRemoveItem(todoId) {
    //console.log(`removing todoId: ${todoId}`);
    const newItems = this.state.items.filter(item => {
      return item.id !== todoId;
    });
    this.setState({ items: newItems })
  }

  render() {
    return (
      <div className="todo-app">
        <TodoAdd
          value={this.state.value}
          onChange={this.changeValue}
          onButtonClick={this.addTodoItem}
        />
        <TodoList changeStatus={this.changeStatus } items={this.state.items} onRemoveItem={this.onRemoveItem} />
      </div>
    );
  }
}

export default TodoApp;
