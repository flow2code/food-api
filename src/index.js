import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import RegisterForm from './components/RegisterForm';
import Dummy from './components/pages/Dummy';
import ErrorPage from './components/pages/ErrorPage';
import AuthorizedOnly from './components/pages/AuthorizedOnly';

import './styles/main.css';

import { Provider } from 'react-redux';
import ReduxTest, { store } from './components/ReduxTest';

store.dispatch({type: 'ADD_TASK', title: 'pierwsze'})
store.dispatch({type: 'ADD_TASK', title: 'drugie'})
store.dispatch({type: 'ADD_TASK', title: 'trzecie'})

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={RegisterForm} />
				<Route path="test" component={ReduxTest} />
				<Route path="info" component={AuthorizedOnly(Dummy)} />
				<Route path="profile" component={Dummy} />
				<Router path="*" component={ErrorPage} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
