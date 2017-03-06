import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers/Reducers'
import { createStore } from 'redux'
import App from './containers/App'

const store = createStore(reducer)
const el = document.getElementById('root')

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    el
)