import { createStore, applyMiddleware, compose } from 'redux'
import createSageMiddleware from 'redux-saga'
import { reducers } from './reducers'
import services from './services'


const sageMiddleware = createSageMiddleware()

const middlewares = [sageMiddleware]

const store = createStore(
    reducers,
    compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
)

sageMiddleware.run(services)

export default store