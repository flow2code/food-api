import 'whatwg-fetch';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import RegisterForm from './components/RegisterForm';
import Profile from './components/pages/Profile';
import ErrorPage from './components/pages/ErrorPage';
import AuthorizedOnly from './components/pages/AuthorizedOnly';
import Login from './components/pages/Login';
import store from './store'

import './styles/main.css';

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={RegisterForm} />
				<Route path="profile" component={Profile} />
				<Route path="login" component={Login} />
				<Router path="*" component={ErrorPage} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
	if (module.hot) {
		module.hot.accept();
	}
}

