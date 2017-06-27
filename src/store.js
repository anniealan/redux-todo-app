import {createStore, applyMiddleware} from 'redux'
import todos from './reducers/todosReducer'
import form from './reducers/formReducer'
import activeTodo from './reducers/activeTodoReducer'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk';


const reducers = combineReducers({todos, activeTodo, form})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
