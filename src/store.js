import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger'
import reducer from './reducers/reducers'

const middleware = applyMiddleware(promiseMiddleware, logger())

export default createStore(reducer, middleware)
