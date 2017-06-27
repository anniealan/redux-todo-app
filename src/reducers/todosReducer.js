import {LOAD_TODOS_SUCCESS, ADD_TODO_SUCCESS} from '../actions/todosActions'

export default function(state = [], action) {
  const {type} = action
  switch (type) {
    case LOAD_TODOS_SUCCESS:
      return action.payload
    case ADD_TODO_SUCCESS:
      return action.payload
    default:
      return state

  }
}
