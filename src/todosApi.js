export function apiGetAllTodos() {
  return fetch('http://localhost:3000/api/todos').then(result => {
    return result.json();
  }).catch(error => {
    return error;
  });
}

export function apiAddTodo(title) {
  const initObj = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({title})
  }
  return fetch('http://localhost:3000/api/todos', initObj).then(result => {
    return result.json();
  }).catch(error => {
    return error;
  });
}

export function apiUpdateTodo(title, _id) {
  const initObj = {
    method: "PUT",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({title})
  }
  return fetch(`http://localhost:3000/api/todos/${_id}`, initObj).then(result => result.json()).catch(error => {
    return error;
  });
}

export function apiDeleteTodo(_id) {

  return fetch(`http://localhost:3000/api/todos/${_id}`, {
    method: "delete",
    credentials: 'include'
  }).then(result => result.json()).catch(err => console.log(err))
}
