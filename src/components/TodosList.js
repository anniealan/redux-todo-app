import React from 'react';
import Todo from './Todo'
import PropTypes from 'prop-types'

const TodoList = (props) => {

  return (
    <div className="TodoList">
      {props.todoList.map(todo => <Todo key={todo._id} todo={todo}/>)}
    </div>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired
}

export default TodoList
