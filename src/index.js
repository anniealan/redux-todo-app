import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import store from './store'

import {loadTodos} from './actions/todosActions'

const root = document.getElementById('root')

const render = Component => {
  ReactDOM.render(
    <AppContainer>
    <Provider store={store}>
      <Component/>
    </Provider>
  </AppContainer>, root)
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    const NextRootContainer = require('./components/App.js').default
    render(NextRootContainer)

  })
}
