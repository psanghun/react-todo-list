import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todolist = todos.map(todo => (
      <TodoItem
        key={todo.id}
        onToggle={() => onToggle(todo.id)}
        done={todo.done}
        onRemove={() => onRemove(todo.id)}
      >
        {todo.text}
      </TodoItem>
    ));
    return <div>{todolist}</div>;
  }
}

export default TodoList;
