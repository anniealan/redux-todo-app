export const CHANGE_TITLE = "CHANGE_TITLE"
export const TOGGLE_ERROR = "TOGGLE_ERROR"

export function changeTitle(title) {
  return {type: CHANGE_TITLE, payload: title}
}

export function toggleError(bool) {
  return {type: TOGGLE_ERROR, payload: bool}
}
