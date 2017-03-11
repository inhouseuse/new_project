// EntryPoint

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import { createStore } from 'redux'
import App from './containers/App/index'

const store = createStore(reducer)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)