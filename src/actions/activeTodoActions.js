export const CHANGE_ACTIVE_TODO = "CHANGE_ACTIVE_TODO"

export function changeActiveTodo(todo) {
  return {type: CHANGE_ACTIVE_TODO, payload: todo}
}
