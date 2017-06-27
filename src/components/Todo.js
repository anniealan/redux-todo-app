import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeActiveTodo} from '../actions/activeTodoActions'
import {deleteTodo} from '../actions/todosActions'

class Todo extends PureComponent {

  edit = () => {
    this.props.changeActiveTodo(this.props.todo)
  }
  delete = () => {
    this.props.deleteTodo(this.props.todo._id)
  }
  render() {
    return (
      <div className="Todo">
        <p>{this.props.todo.title}</p>
        <button type="button" onClick={this.edit}>Edit</button>
        <button type="button" onClick={this.delete}>Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {activeTodo: state.activeTodo};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeActiveTodo,
    deleteTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
