import React from 'react'

export default props =>
  <form onSubmit={props.handleTodoSubmit}>
    <input
      type='text'
      className="new-todo"
      value={props.currentTodo}
      onChange={props.handleNewTodoChange}
      autoFocus
      placeholder="What needs to be done?"/>
  </form>
