import {apiGetAllTodos, apiAddTodo, apiUpdateTodo, apiDeleteTodo} from '../todosApi'

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS"
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"

export function loadTodos() {
  return function(dispatch) {
    return apiGetAllTodos().then(result => {
      dispatch(loadTodosSuccess(result.tasks));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTodosSuccess(todos) {
  return {type: LOAD_TODOS_SUCCESS, payload: todos}
}

export function addTodo(title) {
  return function(dispatch) {
    return apiAddTodo(title).then(result => {
      dispatch(loadTodosSuccess(result))
    }).catch(error => {
      throw(error)
    })
  }
}

export function updateTodo(title, _id) {
  return function(dispatch) {
    return apiUpdateTodo(title, _id).then(result => {
      console.log(result)
      dispatch(loadTodosSuccess(result))
    })
  }
}

export function deleteTodo(_id) {
  return function(dispatch) {
    return apiDeleteTodo(_id).then(result => {
      console.log(result)
      dispatch(loadTodosSuccess(result))
    })
  }
}
