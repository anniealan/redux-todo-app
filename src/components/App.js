import React, {PureComponent} from 'react'
import Redux from 'redux'
import Form from './Form'
import TodosList from './TodosList'
import update from 'immutability-helper'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadTodos, addTodo} from '../actions/todosActions';

class App extends PureComponent {

  componentDidMount() {
    this.props.loadTodos()
  }
  render() {
    return (
      <div>
        <Form/>
        <TodosList todoList={this.props.todos}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {todos: state.todos};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadTodos,
    addTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
