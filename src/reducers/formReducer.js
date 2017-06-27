import {changeTitle, toggleError} from '../actions/formActions'
import {CHANGE_TITLE, TOGGLE_ERROR} from '../actions/formActions'
import {CHANGE_ACTIVE_TODO} from '../actions/activeTodoActions'
import {LOAD_TODOS_SUCCESS} from '../actions/todosActions'

const initialState = {
  title: "",
  error: false
}

export default function(state = initialState, action) {

  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload
      }
      break
    case CHANGE_ACTIVE_TODO:
      return {
        ...state,
        title: action.payload.title
      }
    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        title: ""
      }
    case TOGGLE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
