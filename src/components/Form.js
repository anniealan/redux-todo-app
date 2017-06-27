import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTodo, updateTodo} from '../actions/todosActions'
import {changeTitle, toggleError} from '../actions/formActions'

class Form extends PureComponent {

  addTodo = () => {
    if (this.props.form.title) {
      this.props.addTodo(this.props.form.title)
      this.props.toggleError(false)
    } else {
      this.props.toggleError(true)
    }
  }
  updateTodo = () => {
    if (this.props.form.title) {
      this.props.updateTodo(this.props.form.title, this.props.activeTodo._id)
      this.props.toggleError(false)
    } else {
      this.props.toggleError(true)
    }
  }
  renderButton() {
    if (!this.props.activeTodo) {
      return <button type="button" onClick={this.addTodo}>Add</button>

    } else {

      return <button type="button" onClick={this.updateTodo}>Update</button>
    }
  }
  renderError() {
    if (this.props.form.error) {
      return <span>
        Title is required</span>
    }
  }
  handleChange = (e) => {
    this.props.changeTitle(e.target.value)
  }
  render() {
    return (
      <div className="Form">
        <input type="text" id="title" value={this.props.form.title} onChange={this.handleChange} placeholder="title"/> {this.renderButton()}
        {this.renderError()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {activeTodo: state.activeTodo, form: state.form};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo,
    changeTitle,
    toggleError,
    updateTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
