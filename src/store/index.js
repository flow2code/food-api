import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

let enhancers = applyMiddleware(thunkMiddleware);

if (process.env.NODE_ENV !== 'production') {
	enhancers = compose(
		enhancers,
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
}

export default createStore(rootReducer, enhancers);
