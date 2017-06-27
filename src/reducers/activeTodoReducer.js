import {CHANGE_ACTIVE_TODO} from '../actions/activeTodoActions'

export default function(state = null, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_TODO:
      return action.payload
    default:
      return state

  }
}
