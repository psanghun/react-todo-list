import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem done>시은이 만세!</TodoItem>
        <TodoItem>초은아 뭐하니?</TodoItem>
      </div>
    );
  }
}

export default TodoList;
